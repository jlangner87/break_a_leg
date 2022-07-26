const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/api', routes)
db.on('error', console.error.bind(console, 'CONNECTION ERROR :: MONGODB'))

app.get('/', (req, res) => {
  res.json('This is root!')
})

app.get('/shows', (req, res) => {
  res.json('The shows route exists!')
})

app.get('/volunteers', (req, res) => {
  res.json('The shows volunteers exists!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
