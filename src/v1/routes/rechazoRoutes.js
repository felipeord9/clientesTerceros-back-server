const express = require('express')
const RechazoController = require('../../controllers/rechazoController')

const router = express.Router()

router
    .post('/',RechazoController.createRechazo)
    
module.exports = router