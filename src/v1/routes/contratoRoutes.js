const express = require('express')
const ContratoController = require('../../controllers/contratoController')

const router = express.Router()

router.get('/', ContratoController.findAllContratos)
      .get("/:id", ContratoController.findOne)
      .post('/',ContratoController.createContrato)
      .patch('/:id', ContratoController.updateContrato)
      .delete('/:id', ContratoController.deleteContrato)

module.exports = router