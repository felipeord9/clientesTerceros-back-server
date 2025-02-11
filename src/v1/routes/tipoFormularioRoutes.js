const express = require('express')
const TipoFormularioController = require('../../controllers/tipoFormularioController')

const router = express.Router()

router.get('/', TipoFormularioController.findAllTipos)

module.exports = router