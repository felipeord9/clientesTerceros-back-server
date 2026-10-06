'use strict';
const { EMPLEADO_TABLE, EmpleadoSchema } = require("../models/empleadoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(EMPLEADO_TABLE, 'doc_licencia_conduccion', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {

  }
};