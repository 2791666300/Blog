
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const User = require('../Models/userModel')
const catchAsync = require('../Utils/catchAsync')
const AppError = require('../Utils/appError')


// 生成token的方法
const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

function creatSendToken(user, statusCode, res) {
    token = signToken(user._id)
    // console.log(token)

    // 设置cookie
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    // 发送cookie
    res.cookie('jwt', token, cookieOptions)

    // 在输出中去掉密码
    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    })
}

// 1.注册
exports.signup = catchAsync(async (req, res, next) => {
    if (req.body.role) {
        return next('你在干什么')
    }
    const newUser = await User.create(req.body)
    creatSendToken(newUser, 201, res)
})

// 2.登录
exports.login = catchAsync(async (req, res, next) => {

    // 解构赋值
    const { email, password } = req.body
    // 1) 检查电子邮件和密码是否存在
    if (!email || !password) {
        return next(new AppError('请提供email或者pasword', 400))
    }

    // 2) 检查用户是否存在以及密码是否正确
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new AppError('邮箱或者密码错误！！', 401))
    }


    const correct = await user.correctPassword(password, user.password)

    if (!correct) {
        return next(new AppError('邮箱或者密码错误！！', 401))
    }


    // 3) 如果一切正常，在客户端发送令牌
    creatSendToken(user, 200, res)

})

// 3.登出
exports.logout = (req, res) => {
    // 重置cookie
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    })
    const data = null
    res.status(200).json({
        data
    })
}

// 4.验证令牌 控制请求数据的权限
exports.protect = catchAsync(async (req, res, next) => {

    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    // 用户可以通过cookie来验证登录
    if (req.body.cookie) {
        token = req.body.cookie.split('=')[1]
    }

    if (req.query.cookie) {
        token = req.query.cookie.split('=')[1]
    }

    if (!token) {
        return next(new AppError('您尚未登录，请登录以获取访问权限！！', 401))
    }
    // 2） 验证令牌     
    // promisify 是util库的一个方法， 负责创造异步函数的promise
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    // console.log(decoded)  { id: '62e917ff3a25680204465d52', iat: 1659448239, exp: 1668088239 }

    // // 3） 检查用户是否仍然存在
    const currentUser = await User.findById(decoded.id)

    if (!currentUser) {
        return next(new AppError('属于此令牌的用户不再存在！！', 401))
    }

    // 4） 检查用户是否在令牌发出后更改了密码
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('用户更改了密码，请重新登录！！', 401))
    }
    // 5) 有访问权限了
    req.user = currentUser
    next()
})

// 5.控制删除数据的权限
exports.restrictTo = (...roles) => {
    // console.log(roles)  [ 'admin', 'lead-guide' ]
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) { // 从上一个中间件获取 req.user
            return next(new AppError('你没有执行此操作的权限！！', 403))
        }
        next()
    }
}





// 6.更新当前用户密码(登录用户)
exports.updatePassword = catchAsync(async (req, res, next) => {


    // 1） 从数据库集合中获取用户
    const user = await User.findById(req.user.id).select('+password')

    // 2） 检查当前用户的密码是否正确
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('您当前的密码错误', 401))
    }

    if (req.body.passwordCurrent === req.body.password) {
        return next(new AppError('两次密码一致', 401))
    }

    // 3） 如果是，更新密码
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save()

    // 4） 登录用户，发送JWT
    creatSendToken(user, 200, res)
    next()

})


