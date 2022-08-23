const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON()
    delete user.password
    const token = await jwt.sign({ userId: user._id }, jwtSecret)
    user.token = token
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    // 保存到数据库
    await user.save()
    // 删除 password 字段
    user = user.toJSON()
    delete user.password
    // 发送成功响应
    res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
}

exports.gutCurUser = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user })
  } catch (err) {
    next(err)
  }
}

exports.updateCurUser = async (req, res, next) => {
  try {
    res.send('更新当前登录用户')
  } catch (err) {
    next(err)
  }
}
