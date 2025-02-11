const express = require('express')
const DepartamentoController = require('../../controllers/departamentoController')

const router = express.Router()

router
    .get('/', DepartamentoController.findAllDepartamentos)
    .get("/:id", DepartamentoController.findOneDepartamento)
    .post('/',DepartamentoController.createDepartamento)
    .patch('/:id', DepartamentoController.updateDepartamento)
    .delete('/:id', DepartamentoController.deleteDepartamento)

module.exports = router