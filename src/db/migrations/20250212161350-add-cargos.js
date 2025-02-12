'use strict';
const { CARGO_TABLE, CargoSchema } = require("../models/cargosModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CARGO_TABLE,CargoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CARGO_TABLE);

  }
};

