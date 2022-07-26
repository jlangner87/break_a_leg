const Volunteers = require('../models/Volunteers')

const addVol = async (req, res) => {
  try {
    const volunteer = await new Volunteers(req.body)
    await volunteer.save()
    return res.status(201).json({
      volunteer
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addVol
}
