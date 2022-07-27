const Show = require('../models/Shows')

const updateShow = async (req, res) => {
  try {
    const show = await Show.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(show)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  updateShow
}
