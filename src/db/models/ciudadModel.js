const { Model, DataTypes, Sequelize } = require("sequelize");
const { DEPARTAMENTO_TABLE } = require('./departamentoModel')

const CIUDAD_TABLE = 'ciudades'

const CiudadSchema = {
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

class Ciudad extends Model {
  static associate(models) {
    /*     this.belongsTo(models.Departaments,{as:'departament'})
 */  }
 
 static config(sequelize) {
   return {
      sequelize,
      tableName: CIUDAD_TABLE,
      modelName: 'ciudades',
      timestamps: false
    }
  }
}

module.exports = {
  CIUDAD_TABLE,
  CiudadSchema,
  Ciudad
}