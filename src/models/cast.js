const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CastSchema = new Schema({
  person: { type: Schema.Types.ObjectId, ref: 'ActorSchema' },
  character: { type: Schema.Types.ObjectId, ref: 'CharacterSchema' }
})

export default CastSchema
