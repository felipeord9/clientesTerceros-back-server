const express = require("express");
const passport = require('passport')
const CertificadoController = require("../../controllers/certificadoController");

const router = express.Router();

router
  .get("/", CertificadoController.findAllCertificados)
  .get("/:id", CertificadoController.findOneCertificado)
  .get('/tercero/:tercero',CertificadoController.findAll)
  .get('/numero/:tercero',CertificadoController.findByTercero)
  .post('/', CertificadoController.createCertificado)
  .post('/send/certificado', CertificadoController.sendCertifi)
  .post('/enviar/certificado/iva', CertificadoController.sendCertifiIva)
  .post('/certificado/rfte', CertificadoController.certiRetefuente)
  .patch('/:id', CertificadoController.updateCertificado);

module.exports = router