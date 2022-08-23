const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema({
  ...baseModel,
  slug: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  tagList: ['dragons', 'training'],
  favorited: false,
  favoritesCount: 0,
  author: {
    username: 'jake',
    bio: 'I work at statefarm',
    image: 'https://i.stack.imgur.com/xHWG8.jpg',
    following: false
  }
})
