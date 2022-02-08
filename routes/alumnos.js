const express = require('express')
const router = express.Router()


const alumnosController = require('../controllers/alumnoController')
router.get('/', alumnosController.mostrar)

module.exports = router