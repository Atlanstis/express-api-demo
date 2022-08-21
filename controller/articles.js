exports.listArticles = async (req, res, next) => {
  try {
    res.send('文章列表')
  } catch (error) {
    next(err)
  }
}

exports.feedArticles = async (req, res, next) => {
  try {
    res.send('关注用户的文章列表')
  } catch (error) {
    next(err)
  }
}

exports.getArticle = async (req, res, next) => {
  try {
    res.send('获取文章详情')
  } catch (error) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    res.send('创建文章')
  } catch (error) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    res.send('更新文章')
  } catch (error) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('删除文章')
  } catch (error) {
    next(err)
  }
}

exports.addCommentsToArticle = async (req, res, next) => {
  try {
    res.send('文章添加评论')
  } catch (error) {
    next(err)
  }
}

exports.getCommentsFromArticle = async (req, res, next) => {
  try {
    res.send('获取文章评论')
  } catch (error) {
    next(err)
  }
}

exports.deleteComment = async (req, res, next) => {
  try {
    res.send('删除文章评论')
  } catch (error) {
    next(err)
  }
}

exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('收藏文章')
  } catch (error) {
    next(err)
  }
}

exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('取消收藏文章')
  } catch (error) {
    next(err)
  }
}
