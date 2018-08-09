const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CountrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: String,
  timezone: String
})

export default CountrySchema