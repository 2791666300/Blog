// 捕捉异步函数中的错误
module.exports = fn => {
    return (req, res, next) => {
        fn( req, res, next).catch(err => next(err))  //.catch(next)
    }
}