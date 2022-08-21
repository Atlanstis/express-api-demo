const express = require('express')
const articlesController = require('../controller/articles')
const router = express.Router()

// 文章列表
router.get('/', articlesController.listArticles)

// 关注用户的文章列表
router.get('/feed', articlesController.feedArticles)

// 获取文章详情
router.get('/:slug', articlesController.getArticle)

// 创建文章
router.post('', articlesController.createArticle)

// 更新文章
router.put('/:slug', articlesController.updateArticle)

// 删除文章
router.delete('/:slug', articlesController.deleteArticle)

// 文章添加评论
router.post('/:slug/comments', articlesController.addCommentsToArticle)

// 获取文章评论
router.get('/:slug/comments', articlesController.getCommentsFromArticle)

// 删除文章评论
router.delete('/:slug/comments/:id', articlesController.deleteComment)

// 收藏文章
router.get('/:slug/favorite', articlesController.favoriteArticle)

// 取消收藏文章
router.delete('/:slug/favorite', articlesController.unfavoriteArticle)

module.exports = router
