const { Model, DataTypes, Sequelize } = require("sequelize");

const BITACORA_TABLE = 'bitacora'

const BitacoraSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement:true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true,
    field:'Usuario',
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  accion:{
    type: DataTypes.INTEGER,
    allowNull: true,
    field:'realizo_accion',
  },
  fechaIngreso:{
    type: DataTypes.DATE,
    allowNull: false,
    field: "fecha_hora_ingreso",
  },
  fechaSalida:{
    type: DataTypes.DATE,
    allowNull: true,
    field: "fecha_hora_salida",
  },
  macEquipo:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'mac_equipo'
  },
}

class Bitacora extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BITACORA_TABLE,
      modelName: 'Bitacora',
      timestamps: false
    }
  }
}

module.exports = {
  BITACORA_TABLE,
  BitacoraSchema,
  Bitacora
}