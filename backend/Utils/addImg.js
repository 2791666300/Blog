const multer = require('multer')
// 1 设置内存存储引擎 memoryStorage
const storage = multer.diskStorage({
    destination: 'public/ArticlesImg',
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

// const sharp = require('sharp')

// 2.过滤  图片返回true
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new AppError('不是图像！ 请上传图像'), false)
    }
}


// 3. 创建multer对象
const upload = multer({ storage: storage, fileFilter: multerFilter, })

// 4. API
exports.uploadPhoto = upload.single('img') // single 当个文件



// // 调整图片大小并且存入
// exports.resizeUserPhoto = async (req, res, next) => {
//     // 1) 如果没有file也就是没有要上传的文件，则直接next()
//     if (!req.file) return next()
//     // req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
//     req.file.filename = `user-${Date.now()}.jpeg`;

//     await sharp(req.file.buffer)
//         .resize(500, 500)
//         .toFormat('jpeg')
//         .jpeg({ quality: 90 })
//         .toFile(`public/img/users/${req.file.filename}`);

//     next()
// }
