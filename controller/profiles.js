exports.getProfile = async (req, res, next) => {
  try {
    console.log(req.params.username)
    res.send('用户资料')
  } catch (err) {
    next(err)
  }
}

exports.followUser = async (req, res, next) => {
  try {
    res.send('关注用户')
  } catch (err) {
    next(err)
  }
}

exports.unfollowUser = async (req, res, next) => {
  try {
    res.send('取消关注用户')
  } catch (err) {
    next(err)
  }
}
