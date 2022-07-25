const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Shows } = require('./models')
const { Volunteers } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  console.log('get operation successful')
  res.send('THIS IS THE ROOT!')
})

app.get('/shows', async (req, res) => {
  const shows = await Shows.find({})
  res.json(shows)
})

app.get('/volunteers', async (req, res) => {
  const volunteers = await Volunteers.find({})
  res.json(volunteers)
})

app.get('/shows/:title', async (req, res) => {
  const { title } = req.params
  const show = await Shows.find({ title: title })
  res.json(show)
})

app.get('/volunteers/:name', async (req, res) => {
  const { name } = req.params
  const person = await Volunteers.find({ name: name })
  res.json(person)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
