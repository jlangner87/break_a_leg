const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')
const Shows = require('./models/Shows')
const Volunteers = require('./models/Volunteers')
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

app.get('/shows', async (req, res) => {
  const shows = await Shows.find({})
  res.json(shows)
})

app.get('/volunteers', async (req, res) => {
  const people = await Volunteers.find({})
  res.json(people)
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

app.post('/shows', (req, res) => {
  let show = req.body
  db.collection('shows')
    .insertOne(show)
    .then((result) => {
      res.status(201).json(result)
    })
})
app.post('/volunteers', (req, res) => {
  let show = req.body
  db.collection('volunteers')
    .insertOne(show)
    .then((result) => {
      res.status(201).json(result)
    })
})

app.delete('/shows', (req, res) => {
  res.send('DELETE request called...')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
