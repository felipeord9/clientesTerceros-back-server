'use strict';
const { EMPLEADO_TABLE, EmpleadoSchema } = require("../models/empleadoModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(EMPLEADO_TABLE, 'segundo_apellido', {
      type: Sequelize.STRING,
      allowNull: true, // Aquí es donde sucede el cambio
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);

  }
};
