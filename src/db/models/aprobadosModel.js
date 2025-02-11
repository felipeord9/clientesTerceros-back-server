const { Model, DataTypes, Sequelize } = require("sequelize");

const APROBADOS_TABLE = 'aprobados'

const AprobadosSchema = {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    field:'id_aprobado'
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
  quienAprueba:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'quien_aprueba'
  },
  fechaAprobacion:{
    type: DataTypes.DATE,
    allowNull: false,
    field: "fecha_aprobacion",
  },
  detalleAprobacion: {
    type: DataTypes.TEXT,
    allowNull: true,
    field:'detalle_aprobacion'
},
}

class Aprobados extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: APROBADOS_TABLE,
      modelName: 'Aprobados',
      timestamps: false
    }
  }
}

module.exports = {
  APROBADOS_TABLE,
  AprobadosSchema,
  Aprobados
}