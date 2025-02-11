const express = require('express')
const AgencyController = require('../../controllers/agencyController')

const router = express.Router()

router
    .get('/', AgencyController.findAllAgencies)
    .get("/:id", AgencyController.findOneAgency)
    .post('/',AgencyController.createAgency)
    .patch('/:id', AgencyController.updateAgency)
    .delete('/:id', AgencyController.deleteAgency)

module.exports = router