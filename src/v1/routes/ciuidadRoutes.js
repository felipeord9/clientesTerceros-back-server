const express = require('express')
const CiudadController = require('../../controllers/ciudadController')

const router = express.Router()

router.get('/', CiudadController.findAllCiudades)
      .get('/:city',CiudadController.findOneCiudad)
      .get("/:id", CiudadController.findOneCity)
      .post('/',CiudadController.createCiudad)
      .patch('/:id', CiudadController.updateCiudad)
      .delete('/:id', CiudadController.deleteCiudad)

module.exports = router