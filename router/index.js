const express = require('express')
const usersRouter = require('./users')
const profilesRouter = require('./profiles')
const articlesRouter = require('./articles')
const tagsRouter = require('./tags')
const router = express.Router()

// 用户相关路由
router.use(usersRouter)
// 用户资料相关路由
router.use('/profiles', profilesRouter)
// 文章相关路由
router.use('/articles', articlesRouter)
// 标签相关路由
router.use('/tags', tagsRouter)

module.exports = router
