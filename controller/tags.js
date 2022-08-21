exports.getTags = async (req, res, next) => {
  try {
    res.send('获取文章标签')
  } catch (error) {
    next(err)
  }
}
