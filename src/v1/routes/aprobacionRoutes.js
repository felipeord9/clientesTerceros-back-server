const express = require('express')
const AprobacionController = require('../../controllers/aprobacionController')

const router = express.Router()

router
    .post('/',AprobacionController.createAprobacion)
    
module.exports = router