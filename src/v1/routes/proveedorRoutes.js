const express = require('express')
const passport = require('passport')
const { checkRoles } = require('../../middlewares/authHandler')
const ProveedorController = require('../../controllers/proveedorController')

const router = express.Router()

router
    .get('/',ProveedorController.findAllProveedores)
    .post('/',ProveedorController.createProveedor)
    .post('/send/mail',ProveedorController.send)
    .get('/:id',ProveedorController.findOneProveedor)
    .get('/numero/:cedula',ProveedorController.validar)
    .patch('/update/:id',ProveedorController.updateProveedor)
    .delete('/:id',ProveedorController.deleteProveedor)
    .delete('/delete/:cedula', ProveedorController.deleteByCedula);
    
module.exports = router