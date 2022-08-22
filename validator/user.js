const { body, validationResult } = require('express-validator')
const validate = require('../middleware/validate')
const { User } = require('../model')

exports.register = validate([
  body('user.username')
    .notEmpty()
    .withMessage('用户名不能为空')
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ username })
      if (user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
  body('user.email')
    .notEmpty()
    .withMessage('邮箱不能为空')
    .isEmail()
    .withMessage('邮箱格式不正确')
    .bail() // 前面验证通过则执行后续
    .custom(async (email) => {
      const user = await User.findOne({ email })
      if (user) {
        return Promise.reject('邮箱已存在')
      }
    })
])
