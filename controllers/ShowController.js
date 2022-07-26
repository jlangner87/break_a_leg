const Shows = require('../models/Shows')

const getShow = (req, res) => {
  res.send({ message: 'Fetching the shows from the db' })
}

const addShow = async (req, res) => {
  try {
    const shows = await new Shows(req.body)
    await shows.save()
    return res.status(201).json({ shows })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getShow,
  addShow
}
