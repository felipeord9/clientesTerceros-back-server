'use strict';
const { CERTIFICADO_TABLE, CertificadoSchema } = require("../models/certificadoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CERTIFICADO_TABLE,CertificadoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CERTIFICADO_TABLE);

  }
};
