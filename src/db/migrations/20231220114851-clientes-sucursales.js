'use strict';
const { SUCURSAL_TABLE,SucursalSchema } = require('../models/sucursalModel')
const { CLIENTE_TABLE, ClienteSchema } = require('../models/clienteModel');
const { PROVEEDOR_TABLE, ProveedorSchema } = require('../models/proveedoresModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(SUCURSAL_TABLE,SucursalSchema);
    await queryInterface.createTable(CLIENTE_TABLE,ClienteSchema);
    await queryInterface.createTable(PROVEEDOR_TABLE,ProveedorSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(SUCURSAL_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(PROVEEDOR_TABLE);
  }
};
