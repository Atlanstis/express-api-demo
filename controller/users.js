exports.login = async (req, res, next) => {
  try {
    JSON.parse('[dfdf')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    res.send('用户注册')
  } catch (err) {
    next(err)
  }
}

exports.gutCurUser = async (req, res, next) => {
  try {
    res.send('获取当前登录用户')
  } catch (err) {
    next(err)
  }
}

exports.updateCurUser = async (req, res, next) => {
  try {
    res.send('更新当前登录用户')
  } catch (err) {
    next(err)
  }
}
