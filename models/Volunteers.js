const { Schema } = require('mongoose')

const volunteersSchema = new Schema(
  {
    name: { type: String, required: true },
    headShot: { type: String, required: true },
    city: { type: String, required: true },
    bio: { type: String, required: true },
    resume: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = volunteersSchema
