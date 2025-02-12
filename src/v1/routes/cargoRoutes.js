const express = require('express')
const CargoController = require('../../controllers/cargoController')

const router = express.Router()

router.get('/', CargoController.findAllCargos)
      .get('/:codigo',CargoController.findOneCargo)
      .get("/:id", CargoController.findOne)
      .post('/',CargoController.createCargo)
      .patch('/:id', CargoController.updateCargo)
      .delete('/:id', CargoController.deleteCargo)

module.exports = router