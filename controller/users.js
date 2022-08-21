exports.login = async (req, res, next) => {
  try {
    res.send('用户登录')
  } catch (error) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    res.send('用户注册')
  } catch (error) {
    next(err)
  }
}

exports.gutCurUser = async (req, res, next) => {
  try {
    res.send('获取当前登录用户')
  } catch (error) {
    next(err)
  }
}

exports.updateCurUser = async (req, res, next) => {
  try {
    res.send('更新当前登录用户')
  } catch (error) {
    next(err)
  }
}
