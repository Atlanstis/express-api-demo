const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: (val) => md5(val),
    select: false
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  ...baseModel
})

module.exports = userSchema
