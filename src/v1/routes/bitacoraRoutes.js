const express = require("express");
const passport = require('passport')
const BitacoraController = require("../../controllers/bitacoraController");
/* const { checkRoles } = require('../../middlewares/authHandler')
 */
const router = express.Router();

/* router.use(
  passport.authenticate('jwt', { session: false }), 
  checkRoles('admin')
)
 */
router
  .get("/", BitacoraController.findAllBitacoras)
  .get("/:id", BitacoraController.findOneBitacora)
  .post('/', BitacoraController.createBitacora)
  .patch('/:email', BitacoraController.updateBitacora)
  .get('/',BitacoraController.getDireccionMac)
  .delete('/:email', BitacoraController.deleteBitacora);

module.exports = router