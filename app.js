const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

// 日志输出
app.use(morgan('dev'))

// 解析 application/x-www-form-urlencoded 格式的请求体数据
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 application/json 格式的请求体数据
app.use(bodyParser.json())

// 跨域请求
app.use(cors())

const PORT = process.env.port || 3000

// 挂载路由
app.use('/api', router)

// 挂载统一处理服务端错误中间件
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
