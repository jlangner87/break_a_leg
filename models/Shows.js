const { Schema } = require('mongoose')

const showsSchema = new Schema(
  {
    title: { type: String, required: true },
    poster: { type: String, required: true },
    dates: { type: String, required: true },
    synopsis: { type: String, required: true },
    castCrew: { type: String }
  },
  { timestamps: true }
)

module.exports = showsSchema
