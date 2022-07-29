const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/theaterDatabase', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Theater Database successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
const db = mongoose.connection

module.exports = db
