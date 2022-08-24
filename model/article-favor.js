const { Schema } = require('mongoose')

const ArticleFavorSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
  favor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = ArticleFavorSchema
