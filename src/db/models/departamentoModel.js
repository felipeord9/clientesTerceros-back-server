const { Model, DataTypes, Sequelize } = require("sequelize");

const DEPARTAMENTO_TABLE = 'departamentos'

const DepartamentoSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  codigo:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Departamento extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEPARTAMENTO_TABLE,
      modelName: 'departamentos',
      timestamps: false
    }
  }
}

module.exports = {
  DEPARTAMENTO_TABLE,
  DepartamentoSchema,
  Departamento
}