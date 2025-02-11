const express = require('express')
const CategoriaRechazoController = require('../../controllers/categoriaRechazoController')

const router = express.Router()

router.get('/', CategoriaRechazoController.findAllCategorias)

module.exports = router