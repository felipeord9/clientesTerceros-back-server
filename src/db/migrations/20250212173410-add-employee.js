'use strict';
const { EMPLEADO_TABLE, EmpleadoSchema } = require("../models/empleadoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);

  }
};
