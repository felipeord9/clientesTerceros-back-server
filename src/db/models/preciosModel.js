const { Model, DataTypes, Sequelize } = require("sequelize");

const PRECIO_TABLE = 'precio'

const PrecioSchema = {
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

class Precio extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRECIO_TABLE,
      modelName: 'precio',
      timestamps: false
    }
  }
}

module.exports = {
  PRECIO_TABLE,
  PrecioSchema,
  Precio
}