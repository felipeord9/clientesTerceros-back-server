const express = require("express");
const passport = require('passport')
const SucursalController = require("../../controllers/sucursalController");
const { checkRoles } = require('../../middlewares/authHandler')

const router = express.Router();

router
  .get("/", SucursalController.findAllSucursales)
  .get("/:id", SucursalController.findOneSucursal)
  .get('/codigo/:cedula',SucursalController.findCodigo)
  .post('/', SucursalController.createSucursal)
  .patch('/:id', SucursalController.updateSucursal)
  .delete('/:id', SucursalController.deleteSucursal)
  .delete('/remove/:name', SucursalController.deleteByName);

module.exports = router