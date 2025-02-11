'use strict';
const { TIPO_FORMULARIO_TABLE, TipoFormularioSchema } = require("../models/tipoFormularioModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TIPO_FORMULARIO_TABLE,TipoFormularioSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TIPO_FORMULARIO_TABLE);

  }
};
