const { body, query } = require('express-validator')
const validate = require('../middleware/validate')
const { Article, Comment, ArticleFavor } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章描述不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([validate.isValidObjectId(['params'], 'slug')])

exports.updateArticle = [
  validate([validate.isValidObjectId(['params'], 'slug')]),
  async (req, res, next) => {
    const { slug } = req.params
    const article = await Article.findById(slug)
    if (!article) {
      return res.status(404).end()
    }
    if (article.author.toString() !== req.user._id.toString()) {
      return res.status(403).end()
    }
    req.article = article
    next()
  }
]

exports.deleteArticle = exports.updateArticle

exports.listArticles = validate([
  query('limit').custom(async (val) => {
    if (val && isNaN(Number(val))) {
      return Promise.reject('limit 参数格式错误')
    }
  }),
  query('offset').custom(async (val) => {
    if (val && isNaN(Number(val))) {
      return Promise.reject('offset 参数格式错误')
    }
  })
])

exports.addCommentsToArticle = [
  validate([body('comment.body').notEmpty().withMessage('评论内容不能为空')]),
  validate([validate.isValidObjectId(['params'], 'slug')]),
  async (req, res, next) => {
    const { slug } = req.params
    const article = await Article.findById(slug)
    if (!article) {
      return res.status(404).end()
    }
    next()
  }
]

exports.getCommentsFromArticle = [
  validate([validate.isValidObjectId(['params'], 'slug')]),
  async (req, res, next) => {
    const { slug } = req.params
    const article = await Article.findById(slug)
    if (!article) {
      return res.status(404).end()
    }
    next()
  }
]

exports.deleteComment = [
  validate([
    validate.isValidObjectId(['params'], 'slug'),
    validate.isValidObjectId(['params'], 'id')
  ]),
  async (req, res, next) => {
    const { id, slug } = req.params
    const comment = await Comment.findOne({ _id: id, article: slug })
    if (!comment) {
      return res.status(404).end()
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).end()
    }
    req.comment = comment
    next()
  }
]

exports.favoriteArticle = [
  validate([validate.isValidObjectId(['params'], 'slug')]),
  async (req, res, next) => {
    const { slug } = req.params
    const article = await Article.findById(slug)
    if (!article) {
      return res.status(404).end()
    }
    req.article = article
    next()
  }
]

exports.unfavoriteArticle = [
  ...exports.favoriteArticle,
  async (req, res, next) => {
    const { slug } = req.params
    const { user } = req
    const articleFavor = await ArticleFavor.findOne({
      favor: user._id,
      article: slug
    })
    if (!articleFavor) {
      return res.status(404).end()
    }
    req.articleFavor = articleFavor
    next()
  }
]
