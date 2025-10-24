const { Model, DataTypes, Sequelize } = require("sequelize");
const { EMPLEADO_TABLE } = require('./empleadoModel')

const ESTUDIO_TABLE = 'estudios'

const EstudioSchema = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
  },
  nivel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  establecimiento:{
    type: DataTypes.STRING,
    allowNull: true
  },
  semestre:{
    type: DataTypes.STRING,
    allowNull: true
  },
  empleadoId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
        model: EMPLEADO_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Estudio extends Model {
  static associate(models) {
    this.belongsTo(models.Empleados, {
        foreignKey: 'empleadoId',
        as: 'empleado',
    })
  }
 
 static config(sequelize) {
   return {
      sequelize,
      tableName: ESTUDIO_TABLE,
      modelName: 'Estudio',
      timestamps: false
    }
  }
}

module.exports = {
  ESTUDIO_TABLE,
  EstudioSchema,
  Estudio
}