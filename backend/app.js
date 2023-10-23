const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const globalErrorHandler = require('./controllers/errorController')

// 路由
const userRouter = require('./Routers/userRouter')
const ArticlesRouter = require('./Routers/ArticlesRouter')
const reviewRouter = require('./Routers/reviewRouter')

const app = express()


// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1000')
//     res.setHeader('Access-Control-Allow-Credentials', 'true')
//     next()
// })

// 实现跨域请求
app.use(cors())
app.options('*', cors())

app.use(compression())
// 提供静态文件 中间件
app.use(express.static('./public'))


// 开发日志
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// 解析数据里面的cookie
app.use(cookieParser())

app.use(express.json())



app.use('/api/v1/user', userRouter)
app.use('/api/v1/articles', ArticlesRouter)
app.use('/api/v1/reviews', reviewRouter)

app.use(globalErrorHandler)
module.exports = app