const express = require('express')
const router = express.Router()

// 文章列表
router.get('/', async (req, res, next) => {
  try {
    res.send('文章列表')
  } catch (error) {
    next(err)
  }
})

// 关注用户的文章列表
router.get('/feed', async (req, res, next) => {
  try {
    res.send('关注用户的文章列表')
  } catch (error) {
    next(err)
  }
})

// 获取文章详情
router.get('/:slug', async (req, res, next) => {
  try {
    res.send('获取文章详情')
  } catch (error) {
    next(err)
  }
})

// 创建文章
router.post('', async (req, res, next) => {
  try {
    res.send('创建文章')
  } catch (error) {
    next(err)
  }
})

// 更新文章
router.put('/:slug', async (req, res, next) => {
  try {
    res.send('更新文章')
  } catch (error) {
    next(err)
  }
})

// 删除文章
router.delete('/:slug', async (req, res, next) => {
  try {
    res.send('删除文章')
  } catch (error) {
    next(err)
  }
})

// 文章添加评论
router.post('/:slug/comments', async (req, res, next) => {
  try {
    res.send('文章添加评论')
  } catch (error) {
    next(err)
  }
})

// 获取文章评论
router.get('/:slug/comments', async (req, res, next) => {
  try {
    res.send('获取文章评论')
  } catch (error) {
    next(err)
  }
})

// 删除文章评论
router.delete('/:slug/comments/:id', async (req, res, next) => {
  try {
    res.send('删除文章评论')
  } catch (error) {
    next(err)
  }
})

// 收藏文章
router.get('/:slug/favorite', async (req, res, next) => {
  try {
    res.send('收藏文章')
  } catch (error) {
    next(err)
  }
})

// 取消收藏文章
router.delete('/:slug/favorite', async (req, res, next) => {
  try {
    res.send('取消收藏文章')
  } catch (error) {
    next(err)
  }
})

module.exports = router
