const express = require('express')
const passport = require('passport')
const { checkRoles } = require('../../middlewares/authHandler')
const PreAprovacionController = require('../../controllers/preAprovacionController')

const router = express.Router()

router
    .get('/',PreAprovacionController.findAllPreAprovacion)
    .post('/',PreAprovacionController.createPreAprovacion)
    .get('/:id',PreAprovacionController.findOnePreAprovacion)
    .get('/numero/:cedula',PreAprovacionController.validar)
    .patch('/update/:id',PreAprovacionController.updatePreAprovacion)
    .delete('/:id',PreAprovacionController.deletePreAprovacion)
    .delete('/delete/:cedula', PreAprovacionController.deleteByCedula);
    
module.exports = router