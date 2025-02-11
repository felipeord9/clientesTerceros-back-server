const express = require('express')
const ActividadController = require('../../controllers/actividadController')

const router = express.Router()

router.get('/', ActividadController.findAllActividad)

module.exports = router