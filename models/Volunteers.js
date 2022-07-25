const { Schema } = require('mongoose')

const volunteersSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    headShot: { type: String, required: true },
    city: { type: String, required: true },
    bio: { type: String, required: true },
    resume: { type: String }
  },
  { timestamps: true }
)

module.exports = volunteersSchema
