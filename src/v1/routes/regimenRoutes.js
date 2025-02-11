const express = require('express')
const RegimenController = require('../../controllers/regimenController')

const router = express.Router()

router.get('/', RegimenController.findAllRegimen)

module.exports = router