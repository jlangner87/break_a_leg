const Shows = require('../models/Shows')

const addShow = async (req, res) => {
  try {
    const show = await new Shows(req.body)
    await show.save()
    return res.status(201).json({
      show
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const allShows = async (req, res) => {
  try {
    const shows = await Shows.find()
    return res.status(200).json({ shows })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editShow = async (req, res) => {
  try {
    const show = await Shows.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(show)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  addShow,
  allShows,
  editShow
}
