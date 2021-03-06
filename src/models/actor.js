const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActorSchema = new Schema({
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
  country: { type: Schema.Types.ObjectId, ref: 'CountrySchema' },
  birthday: Date,
  deathday: Date,
  gender: {
    type: String,
    enum: ['Female', 'Male']
  },
  image: {
    medium: String,
    original: String
  },
  _links: { self: { href: String } }
})

export default ActorSchema
