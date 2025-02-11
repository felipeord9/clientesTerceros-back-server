const { Model, DataTypes, Sequelize } = require("sequelize");

const DETALLE_TABLE = 'detalle'

const DetalleSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Detalle extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DETALLE_TABLE,
      modelName: 'detalle',
      timestamps: false
    }
  }
}

module.exports = {
  DETALLE_TABLE,
  DetalleSchema,
  Detalle
}