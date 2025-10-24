'use strict';
const { EMPLEADO_TABLE, EmpleadoSchema } = require("../models/empleadoModel");
const { ESTUDIO_TABLE, EstudioSchema } = require("../models/estudioModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);
    await queryInterface.createTable(ESTUDIO_TABLE,EstudioSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);
    await queryInterface.dropTable(ESTUDIO_TABLE);

  }
};

