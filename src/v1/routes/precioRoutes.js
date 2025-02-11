const express = require('express')
const PrecioController = require('../../controllers/precioController')

const router = express.Router()

router
    .get('/', PrecioController.findAllPrecios)
    .get("/:id", PrecioController.findOnePrecio)

    .post('/',PrecioController.createPrecio)
    .patch('/:id', PrecioController.updatePrecio)
    .delete('/:id', PrecioController.deletePrecio)

module.exports = router