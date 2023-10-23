const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config({ path: './config.env' })
const app = require('./app')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(con => {
    console.log('数据库连接成功！！')
}).catch(err => {
    console.log('数据库连接失败！！')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App running on port ${port}.............`)
})

// process.on('unhandledRejection', err => {
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1)
//     })

// })
