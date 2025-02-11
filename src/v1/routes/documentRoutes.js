const express = require('express')
const DocumentController = require('../../controllers/documentController')

const router = express.Router()

router.get('/', DocumentController.findAllDocuments)

module.exports = router