const { Model, DataTypes, Sequelize } = require("sequelize");

const ACTIVIDAD_ECONOMICA_TABLE = 'actividad'

const ActividadEconomicaSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class ActividadEconomica extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIVIDAD_ECONOMICA_TABLE,
      modelName: 'actividad',
      timestamps: false
    }
  }
}

module.exports = {
  ACTIVIDAD_ECONOMICA_TABLE,
  ActividadEconomicaSchema,
  ActividadEconomica
}