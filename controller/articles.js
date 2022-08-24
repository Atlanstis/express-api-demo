const { Article, User } = require('../model')

const articlePopulate = {
  username: 1,
  bio: 1,
  image: 1,
  _id: 0
}

exports.listArticles = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0, tag, author } = req.query

    const filter = {}
    if (tag) {
      filter.tagList = tag
    }
    if (author) {
      const user = await User.findOne({ username: author })
      filter.author = user ? user._id : null
    }

    const articles = await Article.find(filter)
      .populate('author', articlePopulate)
      .skip(Number(offset))
      .limit(Number(limit))
      .sort({
        // -1：倒序，1：正序
        updateAt: -1
      })
    const articlesCount = await Article.countDocuments(filter)
    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (err) {
    next(err)
  }
}

exports.feedArticles = async (req, res, next) => {
  try {
    res.send('关注用户的文章列表')
  } catch (err) {
    next(err)
  }
}

exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.slug).populate(
      'author',
      articlePopulate
    )
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article({ ...req.body.article, author: req.user._id })
    article.populate('author', articlePopulate)
    await article.save()
    res.status(200).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    const { title, description, body } = req.body.article
    const { article } = req
    article.title = title ? title : article.title
    article.description = description ? description : article.description
    article.body = body ? body : article.body
    await article.save()
    res.status(200).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    const { article } = req
    await article.remove()
    res.status(200).end()
  } catch (err) {
    next(err)
  }
}

exports.addCommentsToArticle = async (req, res, next) => {
  try {
    res.send('文章添加评论')
  } catch (err) {
    next(err)
  }
}

exports.getCommentsFromArticle = async (req, res, next) => {
  try {
    res.send('获取文章评论')
  } catch (err) {
    next(err)
  }
}

exports.deleteComment = async (req, res, next) => {
  try {
    res.send('删除文章评论')
  } catch (err) {
    next(err)
  }
}

exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('收藏文章')
  } catch (err) {
    next(err)
  }
}

exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('取消收藏文章')
  } catch (err) {
    next(err)
  }
}
