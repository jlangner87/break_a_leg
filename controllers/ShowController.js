const getShow = (req, res) => {
  res.send({ message: 'Fetching the shows from the db' })
}

const addShow = (req, res) => {
  res.send({})
}

const updateShow = (req, res) => {
  res.send({})
}

module.exports = {
  getShow,
  addShow,
  updateShow
}
