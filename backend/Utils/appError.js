class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isPerational = true;  // 是否操作

        Error.captureStackTrace(this, this.constructor) // 捕获堆栈跟踪
    }
}

module.exports = AppError;