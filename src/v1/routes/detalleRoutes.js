const express = require('express')
const DetalleController = require('../../controllers/detalleController')

const router = express.Router()

router.get('/', DetalleController.findAllDetalles)

module.exports = router