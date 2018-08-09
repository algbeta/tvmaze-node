const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CharacterSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  url: String,
  name: {
    type: String,
    required: true
  },
  image: {
    medium: String,
    original: String
  },
  _links: { self: { href: String } }
})

export default CharacterSchema
