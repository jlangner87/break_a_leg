const getShow = (req, res) => {
  res.send({ message: 'Fetching the shows from the db' })
}

const addShow = (req, res) => {
  res.send({ message: 'Addind a show to the db' })
}

const updateShow = (req, res) => {
  res.send({ message: 'Updating a show in the db' })
}
const deleteShow = (req, res) => {
  res.send({ message: 'removing a a show from the db' })
}

module.exports = {
  getShow,
  addShow,
  updateShow,
  deleteShow
}
