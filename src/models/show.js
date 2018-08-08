const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ShowSchema = new Schema({
  id: {
    type: Number,
    required: true
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
  type: '',
  language: ''
});

export default ShowSchema