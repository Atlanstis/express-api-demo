const express = require('express')
const tagsController = require('../controller/tags')
const router = express.Router()

// 获取文章标签
router.get('/', tagsController.getTags)

module.exports = router
