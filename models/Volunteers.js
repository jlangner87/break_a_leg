const mongoose = require('mongoose')
const Schema = mongoose.Schema

const volunteersSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    headShot: { type: String, required: true },
    city: { type: String, required: true },
    quote: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('volunteers', volunteersSchema)
