const express = require('express')
const router = express.Router()

// 获取文章标签
router.get('/', async (req, res, next) => {
  try {
    res.send('获取文章标签')
  } catch (error) {
    next(err)
  }
})

module.exports = router
