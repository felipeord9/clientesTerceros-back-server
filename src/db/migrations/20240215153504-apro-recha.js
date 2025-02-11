'use strict';
const { APROBADOS_TABLE, AprobadosSchema } = require("../models/aprobadosModel");
const { CATEGORIA_RECHAZO_TABLE, CategoriaRechazoSchema } = require("../models/categoriaRechazoModel");
const { RECHAZADOS_TABLE, RechazadosSchema } = require("../models/rechazadosModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RECHAZADOS_TABLE,RechazadosSchema);
    await queryInterface.createTable(CATEGORIA_RECHAZO_TABLE,CategoriaRechazoSchema);
    await queryInterface.createTable(APROBADOS_TABLE,AprobadosSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(RECHAZADOS_TABLE);
    await queryInterface.dropTable(CATEGORIA_RECHAZO_TABLE);
    await queryInterface.dropTable(APROBADOS_TABLE);

  }
};
