'use strict';
const { BITACORA_TABLE,BitacoraSchema } = require('../models/bitacoraModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(BITACORA_TABLE, BitacoraSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(BITACORA_TABLE);

  }
};
