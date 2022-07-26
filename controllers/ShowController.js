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

module.exports = {
  addShow
}
