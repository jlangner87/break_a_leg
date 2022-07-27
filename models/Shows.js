const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showsSchema = new Schema(
  {
    title: { type: String, required: true },
    poster: { type: String, required: true },
    dates: { type: String, required: true },
    synopsis: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('shows', showsSchema)
