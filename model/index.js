const mongoose = require('mongoose')
const { dbUri, dbUser, dbPass } = require('../config/config.default')
const userSchema = require('./user')
const articleSchema = require('./article')

// 连接数据库
mongoose.connect(dbUri, {
  authSource: 'admin',
  user: dbUser,
  pass: dbPass
})

const db = mongoose.connection

// 连接失败时
db.on('error', (err) => {
  console.log('MongoDB 数据库连接失败', err)
})

// 连接成功时
db.once('open', function () {
  console.log('MongoDB 数据库连接成功')
})

// 组织导出模型类
// mongoose.model 的第一个参数，建议首字母大写，同时不以 s 结尾
// mongoose 会自动在数据库的集合名末尾增加 s
module.exports = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema)
}
