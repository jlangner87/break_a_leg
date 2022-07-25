const getShow = (req, res) => {
  res.send({ message: 'Fetching the shows from the db' })
}

module.exports = {
  getShow
}
