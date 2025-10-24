const express = require('express')
const EstudioController = require('../../controllers/estudioController')

const router = express.Router()

/* router.use(
    passport.authenticate('jwt', { session: false }), 
) */

router
    .get('/',EstudioController.findAllEstudios)
    .get('/:id',EstudioController.findOneEstudio)
    .post('/',EstudioController.createEstudio)
    .patch('/update/:id',EstudioController.updateEstudio)
    
module.exports = router