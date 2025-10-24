const { Model, DataTypes, Sequelize } = require("sequelize");

const CONTRATO_TABLE = 'contrato'

const ContratoSchema = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement:true,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Contrato extends Model {
  static associate(models) {
  }
 
 static config(sequelize) {
   return {
      sequelize,
      tableName: CONTRATO_TABLE,
      modelName: 'contrato',
      timestamps: false
    }
  }
}

module.exports = {
  CONTRATO_TABLE,
  ContratoSchema,
  Contrato
}