const express = require('express')
const ResponsabilidadController = require('../../controllers/responsabilidadController')

const router = express.Router()

router.get('/', ResponsabilidadController.findAllResponsabilidad)

module.exports = router