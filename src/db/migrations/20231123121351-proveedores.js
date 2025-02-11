'use strict';
const { PROVEEDOR_TABLE, ProveedorSchema } = require('../models/proveedoresModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PROVEEDOR_TABLE,ProveedorSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PROVEEDOR_TABLE);

  }
};
