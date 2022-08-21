const express = require('express')
const router = express.Router()

// 用户资料
router.get('/:username', async (req, res, next) => {
  try {
    console.log(req.params.username)
    res.send('用户资料')
  } catch (error) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('关注用户')
  } catch (error) {
    next(err)
  }
})

// 取消关注用户
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send('取消关注用户')
  } catch (error) {
    next(err)
  }
})

module.exports = router
