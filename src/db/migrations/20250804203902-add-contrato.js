'use strict';
const { CONTRATO_TABLE, ContratoSchema } = require("../models/contratoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CONTRATO_TABLE, ContratoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CONTRATO_TABLE);

  }
};
