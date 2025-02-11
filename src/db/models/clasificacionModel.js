const { Model, DataTypes, Sequelize } = require("sequelize");

const CLASIFICACION_TABLE = 'clasificacion'

const ClasificacionSchema = {
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

class Clasificacion extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLASIFICACION_TABLE,
      modelName: 'clasificacion',
      timestamps: false
    }
  }
}

module.exports = {
  CLASIFICACION_TABLE,
  ClasificacionSchema,
  Clasificacion
}