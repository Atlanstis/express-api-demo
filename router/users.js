const express = require('express')
const router = express.Router()

// 用户登录
router.post('/users/login', async (req, res, next) => {
  try {
    res.send('用户登录')
  } catch (error) {
    next(err)
  }
})

// 用户注册
router.post('/users', async (req, res, next) => {
  try {
    res.send('用户注册')
  } catch (error) {
    next(err)
  }
})

// 获取当前登录用户
router.get('/user', async (req, res, next) => {
  try {
    res.send('获取当前登录用户')
  } catch (error) {
    next(err)
  }
})

// 更新当前登录用户
router.put('/user', async (req, res, next) => {
  try {
    res.send('更新当前登录用户')
  } catch (error) {
    next(err)
  }
})

module.exports = router
