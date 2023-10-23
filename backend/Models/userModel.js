const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '请输入你的名字'],
        maxlength: [20, 'name字段应该小于或等于20！！']
    },
    email: {
        type: String,
        required: [true, '不能没有email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, '请提供有效的email']
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
    role: {
        type: String,
        enum: ['user', 'blogger'],
        default: 'user',
    },
    position: {
        type: String,
        default: '没写职位'
    },
    individual: {
        type: String,
        default: '这人很懒，简介都没写！！'
    },
    password: {
        type: String,
        required: [true, '请输入你的密码'],
        minlength: 5,
        select: false
    },

    passwordConfirm: {
        type: String,
        required: [true, '请确认密码'],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: '两次密码不一样，请重新确认或者输入你的密码'
        }
    },
    thumbsUps: [
        {
            type: String
        }
    ],
    collections: [
        {
            type: String
        }

    ],
    friendShips: [
        {
            linkName: String,
            href: String,
            imgsrc: String,
            imgAlt: String,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    passwordChangedAt: Date,

    passwordResetToken: String,

    PasswordResetExpires: Date,

    active: {
        type: Boolean,
        default: true,
        select: false
    }
})


// 密码加密 在数据保存之前进行加密操作
userSchema.pre('save', async function (next) {
    // isModified 方法 password字段是否被修改
    if (!this.isModified('password')) return next()

    // .hash 方法会返回一个promise
    this.password = await bcrypt.hash(this.password, 12)

    // 加密过后就没必要显示passwordConfirm
    this.passwordConfirm = undefined;

    next()
})

// 在数据保存之前 更改passwordChangedAt 的值 也就是 密码更改时间
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next()
    // 再更改密码后 有时 Json Web Token 令牌可能会早一点，这会引发 （令牌在发出后更改了密码）这个事件 所以要提前1秒更改   
    this.passwordChangedAt = Date.now() - 1000

    next()
})

// 在所有find运行的中间件 只允许显示active属性不为false的数据被找到
userSchema.pre(/^find/, function (next) {
    // this 指向当前的query
    this.find({ active: { $ne: false } })
    next()
})

// 比较两个密码是否相等也就是通过bcrypt库比较两个加过密的密码
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {

    // 比较candidatePassword (候选密码) 和userPassword是否相等
    return await bcrypt.compare(candidatePassword, userPassword)
}


// 通过比较初始密码创建的时间和令牌发布的时间 来判断用户是否在令牌发出后更改了密码
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

        // console.log(JWTTimestamp, changedTimestamp)

        return JWTTimestamp < changedTimestamp
    }
    // false 意味着密码没有更改
    return false
}

// 生成随机重置令牌
userSchema.methods.createPasswordResetToken = function () {
    // crypto 模块加密
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.PasswordResetExpires = Date.now() + 10 * 60 * 1000
    // console.log(resetToken)
    return resetToken
}


const User = mongoose.model('users', userSchema)

module.exports = User