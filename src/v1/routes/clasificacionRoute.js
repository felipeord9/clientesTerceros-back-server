const express = require('express')
const ClasificacionController = require('../../controllers/clasificacionController')

const router = express.Router()

router
    .get('/', ClasificacionController.findAllClasificaciones)
    .get("/:id", ClasificacionController.findOneClasificacion)

    .post('/',ClasificacionController.createClasificacion)
    .patch('/:id', ClasificacionController.updateClasificacion)
    .delete('/:id', ClasificacionController.deleteClasificacion)

module.exports = router