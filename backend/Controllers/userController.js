// Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件
const multer = require('multer')
// 图片裁剪
const sharp = require('sharp')

const User = require('../Models/userModel')
const catchAsync = require('../Utils/catchAsync')
const AppError = require("../Utils/appError");



exports.getMe = (req, res, next) => {
    req.params.id = req.user.id
    next()
}

// 1 设置内存存储引擎 memoryStorage
const multerStorage = multer.memoryStorage();


// 2.过滤  图片返回true
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new AppError('不是图像！ 请上传图像'), false)
    }
}


// 3. 创建multer对象
const upload = multer({ storage: multerStorage, fileFilter: multerFilter })

// 4. API
exports.uploadUserPhoto = upload.single('photo') // single 当个文件

// 调整图片大小并且存入
exports.resizeUserPhoto = async (req, res, next) => {
    // 1) 如果没有file也就是没有要上传的文件，则直接next()
    if (!req.file) return next()
    // req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
    req.file.filename = `user-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/users/${req.file.filename}`);

    next()
}

// 过滤
const filterObj = (obj, ...alloweFields) => {
    const newObj = {}

    Object.keys(obj).forEach(el => {
        if (!alloweFields.includes(el)) newObj[el] = obj[el];
    })
    return newObj
}


// 更新当前用户的常规数据
exports.updateMe = catchAsync(async (req, res, next) => {

    // 1） 如果用户发布密码数据，则创建错误
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('如果想更改密码，请到/updateMyPassword', 400))
    }

    if (req.body.email) {
        return next(new AppError('不能更改email或者name', 400))
    }
    console.log(req.file)

    // 过滤掉不允许更新的不需要的字段名称
    const filteredBody = filterObj(req.body, 'email')
    if (req.file) filteredBody.photo = req.file.filename

    // 2） 更新用户文档

    const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true })

    res.status(200).json({
        status: 'success',
        data: {
            updateUser
        }
    })

})

// 删除当前用户，也就是把当前用户的状态更改为不活跃
exports.deleteMe = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
        status: 'success',
        data: null
    })
})



exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        status: 'success',
        quantity: users.length,
        data: {
            users
        }
    })
})

exports.getUser = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return next(new AppError('找不到该ID的文档数据 ', 404))
    }
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})


exports.creatUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: '请用 /singup 注册新用户'
    })
}

exports.updateUser = catchAsync(async (req, res, next) => {
    const newuser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true // 是否开启验证器
    })

    if (!newuser) {
        return next(new AppError('找不到该ID的文档数据 ', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            newuser
        }
    })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
    const doc = await User.findByIdAndRemove(req.params.id)
    if (!doc) {

        return next(new AppError('找不到该ID的文档数据 ', 404))
    }

    res.status(200).json({
        status: 'success',
        data: '删除成功！！'
    })
})
