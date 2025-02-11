const { Model, DataTypes, Sequelize } = require("sequelize");

const RECHAZADOS_TABLE = 'rechazados'

const RechazadosSchema = {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    field:'id_rechazo'
  },
  idrct:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'id_rtc'
  },
  cedula:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'nit'
  },
  tipoFormulario:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'tipo_formulario'
  },
  agencia:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarioSolicitante:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'usuario_solicitante'
  },
  fechaSolicitud:{
    type: DataTypes.DATE,
    allowNull: false,
    field: "fecha_solicitud",
  },
  quienRechaza:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'quien_rechaza'
  },
  fechaRechazo:{
    type: DataTypes.DATE,
    allowNull: false,
    field: "fecha_rechazo",
  },
  detalleRechazo: {
    type: DataTypes.TEXT,
    allowNull: true,
    field:'detalle_rechazo'
},
}

class Rechazados extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECHAZADOS_TABLE,
      modelName: 'Rechazados',
      timestamps: false
    }
  }
}

module.exports = {
  RECHAZADOS_TABLE,
  RechazadosSchema,
  Rechazados
}