const { User } = require('../model')

exports.login = async (req, res, next) => {
  try {
    res.send('用户登录')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body.user)
    // 保存到数据库
    await user.save()
    // 发送成功响应
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.gutCurUser = async (req, res, next) => {
  try {
    res.send('获取当前登录用户')
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
