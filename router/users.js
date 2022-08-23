const express = require('express')
const usersController = require('../controller/users')
const userValidator = require('../validator/user')
const router = express.Router()

// 用户登录
router.post('/users/login', userValidator.login, usersController.login)

// 用户注册
router.post('/users', userValidator.register, usersController.register)

// 获取当前登录用户
router.get('/user', usersController.gutCurUser)

// 更新当前登录用户
router.put('/user', usersController.updateCurUser)

module.exports = router
