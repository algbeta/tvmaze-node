const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ShowSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  type: String,
  language: String,
  status: String,
  runtime: Number,
  premiered: Date,
  officialSite: String,
  schedule: {
    time: String,
    days: [
      {
        type: String,
        enum: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ]
      }
    ]
  },
  rating: { average: Number },
  weight: Number,
  image: {
    medium: String,
    original: String
  },
  _links: {
    self: { href: String },
    previousepisode: { href: String }
  }
})

export default ShowSchema
