const express = require('express')
const passport = require('passport')
const { checkRoles } = require('../../middlewares/authHandler')
const ClienteController = require('../../controllers/clienteController')

const router = express.Router()

router
    .get('/',ClienteController.findAllClientes)
    .get('/duo', ClienteController.duo)
    .post('/',ClienteController.createCliente)
    .post('/send/mail',ClienteController.send)
    .get('/:id',ClienteController.findOneCliente)
    .get('/numero/:cedula',ClienteController.validar)
    .patch('/update/:id',ClienteController.updateCliente)
    .delete('/:id',ClienteController.deleteCliente)
    .delete('/delete/:cedula', ClienteController.deleteByCedula);
    
module.exports = router