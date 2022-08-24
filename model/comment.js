const { Schema } = require('mongoose')
const baseModel = require('./base-model')

const commentSchema = new Schema({
  ...baseModel,
  body: {
    type: String,
    required: true
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
    select: false
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = commentSchema
