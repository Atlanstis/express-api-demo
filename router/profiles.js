const express = require('express')
const profilesController = require('../controller/profiles')
const router = express.Router()

// 用户资料
router.get('/:username', profilesController.getProfile)

// 关注用户
router.post('/:username/follow', profilesController.followUser)

// 取消关注用户
router.delete('/:username/follow', profilesController.unfollowUser)

module.exports = router
