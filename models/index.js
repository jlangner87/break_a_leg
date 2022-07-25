const mongoose = require('mongoose')
const showsSchema = require('./Shows')
const volunteersSchema = require('./Volunteers')

const Shows = mongoose.model('Shows', showsSchema)
const Volunteers = mongoose.model('Volunteers', volunteersSchema)

module.exports = {
  Shows,
  Volunteers
}
