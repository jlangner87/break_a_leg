const { Router } = require('express')
const showControllers = require('../controllers/ShowController')
const volControllers = require('../controllers/VolController')
const router = Router()

router.get('/shows', showControllers.allShows)
router.post('/shows', showControllers.addShow)

router.put('/shows', showControllers.editShow)

module.exports = router
