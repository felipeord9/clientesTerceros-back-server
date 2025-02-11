'use strict';
const { CLIENTE_TABLE, ClienteSchema } = require('../models/clienteModel');
const { PROVEEDOR_TABLE, ProveedorSchema } = require('../models/proveedoresModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PROVEEDOR_TABLE,ProveedorSchema);
    await queryInterface.createTable(CLIENTE_TABLE,ClienteSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PROVEEDOR_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);

  }
};
