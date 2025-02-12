const { Model, DataTypes, Sequelize } = require("sequelize");

const CARGO_TABLE = 'cargo'

const CargoSchema = {
  id:{
    type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Cargo extends Model {
  static associate(models) {
  }
 
 static config(sequelize) {
   return {
      sequelize,
      tableName: CARGO_TABLE,
      modelName: 'cargo',
      timestamps: false
    }
  }
}

module.exports = {
  CARGO_TABLE,
  CargoSchema,
  Cargo
}