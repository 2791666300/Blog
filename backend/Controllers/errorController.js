const AppError = require("../utils/appError");

// 句柄转换错误
const handleCastErrorDB = err => {
    const message = `无效的 ${err.path}: ${err.value}`
    return new AppError(message, 404)
    
}

// 重复字段处理
const handleDuplicateFieldsDB = err => {
    
    // const message = `重复的字段值: ${err.keyValue.email}    请使用另一个值!`;
    const message = 'Emial错误或者已经注册过'
    return new AppError(message, 404)
}

// Mongoose验证错误处理
const handleValidationErrorDB = err => {
    const val = (JSON.stringify(err.message).split(":")[2])
    const message = `${val}`;
    return new AppError(message, 404)
}

// jsonwebtoken 签名出错
const handleJWTError = err => new AppError('令牌无效，请重新登录', 401)

// jsonwebtoken 过期
const handleJWTExpireError = err => new AppError('令牌过期，请重新登录', 401)

// development 状态下
const sendErrorDev = (err, res) => {
    
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
}

// production 状态下
const sendErrorProd = (err, res) => {
    
    // 操作、可信错误：向客户端发送消息
    if (err.isPerational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });

    

    // 编程或其他未知错误：不要泄漏错误详细信息
    }else{
        res.status(500).json({
            status: 'error',
            message: 'Something went very worong'
        })
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(process.env.NODE_ENV)
    
    if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err, res)
    }else if(process.env.NODE_ENV === 'production'){
        // console.log(JSON.parse(JSON.stringify(err)))
        
        // ConstError
        if (JSON.parse(JSON.stringify(err)).name === 'CastError') err = handleCastErrorDB(err);

        // MongoError
        if(err.code === 11000) err = handleDuplicateFieldsDB(err)

        // ValidationError
        if(JSON.parse(JSON.stringify(err)).name === 'ValidationError') err = handleValidationErrorDB(err)

        // JsonWebTokenError
        if(JSON.parse(JSON.stringify(err)).name === 'JsonWebTokenError') err = handleJWTError(err)

        // TokenExpiredError
        if(JSON.parse(JSON.stringify(err)).name === 'TokenExpiredError') err = handleJWTExpireError(err)


        // 没有具体的错误则统一使用seedErrorProd错误处理函数
        sendErrorProd(err, res)
    }
}

/**一个错误输出实例
 * {
    "status": "error",
    "err": {
        "stringValue": "\"sss\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "sss",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"sss\" (type string) at path \"_id\" for model \"Tour\""
    },
    "message": "Cast to ObjectId failed for value \"sss\" (type string) at path \"_id\" for model \"Tour\"",
    "stack": "CastError: Cast to ObjectId failed for value \"sss\" (type string) at path \"_id\" for model \"Tour\"\n    at model.Query.exec (D:\\1.Web前端学习\\9.Node.js\\7.express\\3.app-mongoDB-重构\\node_modules\\mongoose\\lib\\query.js:4498:21)\n    at model.Query.Query.then (D:\\1.Web前端学习\\9.Node.js\\7.express\\3.app-mongoDB-重构\\node_modules\\mongoose\\lib\\query.js:4592:15)"
} */