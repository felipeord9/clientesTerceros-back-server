'use strict';
const { PRE_APROVACION_TABLE,PreAprovacionSchema } = require('../models/preAprovacionModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRE_APROVACION_TABLE,PreAprovacionSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRE_APROVACION_TABLE);

  }
};
