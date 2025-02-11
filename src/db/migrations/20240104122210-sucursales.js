'use strict';
const { SUCURSAL_TABLE,SucursalSchema } = require('../models/sucursalModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(SUCURSAL_TABLE,SucursalSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(SUCURSAL_TABLE);
  }
};
