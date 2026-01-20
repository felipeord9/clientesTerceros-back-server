'use strict';
const { EMPLEADO_TABLE, EmpleadoSchema } = require("../models/empleadoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(EMPLEADO_TABLE, 'review', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    })
    await queryInterface.addColumn(EMPLEADO_TABLE, 'razon_devolucion', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
