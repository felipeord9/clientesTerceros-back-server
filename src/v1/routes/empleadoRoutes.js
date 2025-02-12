const express = require('express')
const EmpleadoController = require('../../controllers/empleadoController')
const passport = require('passport')
const { checkRoles } = require('../../middlewares/authHandler')

const router = express.Router()

/* router.use(
    passport.authenticate('jwt', { session: false }), 
) */

router
    .get('/',EmpleadoController.findAllEmpleados)
    .get('/:id',EmpleadoController.findOneEmpleado)
    .get('/cedula/:cedula',EmpleadoController.findEmpleadoByCedula)
    .post('/',EmpleadoController.createEmpleado)
    .post('/send/mail', EmpleadoController.send)
    .post('/correo/respuesta',EmpleadoController.correoRespuesta)
    .patch('/update/:id',EmpleadoController.updateEmpleado)
    
module.exports = router