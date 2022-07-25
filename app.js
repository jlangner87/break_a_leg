const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Shows, Volunteers } = require('./models')

const showController = require('./controllers/ShowController')
const volController = require('./controllers/VolController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
