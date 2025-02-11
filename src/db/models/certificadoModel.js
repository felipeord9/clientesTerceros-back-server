const { Model, DataTypes, Sequelize } = require("sequelize");

const CERTIFICADO_TABLE = 'certificados'

const CertificadoSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  tercero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombreTercero:{
    type:DataTypes.STRING,
    allowNull: false,
    field:'nombre_tercero',
  },
  direccion:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'direccion'
  },
  codCiudad:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'cod_ciudad'
  },
  emailTercero:{
    type:DataTypes.STRING,
    allowNull: true,
    field:'email_tercero'
  },
  cuenta:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  nombreAuxiliar:{
    type:DataTypes.STRING,
    allowNull: false,
    field:'nombre_auxiliar',
  },
  sumaDebito:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'suma_debito'
  },
  sumaCredito:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'suma_credito'
  },
  sumaMovimiento:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'suma_movimiento'
  },
  sumaValorBase:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'suma_valor_base'
  },
  clase:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  ciudadIca:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'ciudad_ica'
  },
  tasa:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  tipoCertificado:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'tipo_certificado'
  },
  valorRetenido:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'valor_retenido'
  },
  base:{
    type:DataTypes.STRING,
    allowNull:true,
  },
  concepto:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  correoEnvio:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'correo_envio'
  },
  usuarioEnvio:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'usuario_envio'
  },
  nombreSolicitante:{
    type:DataTypes.STRING,
    allowNull:true,
    field:'nombre_solicitante'
  },
  fechaEnvio:{
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_envio',
    defaultValue: Sequelize.NOW
  }
}

class Certificado extends Model {
  static associate(models) {
    /*     this.belongsTo(models.Departaments,{as:'departament'})
 */  }
 
 static config(sequelize) {
   return {
      sequelize,
      tableName: CERTIFICADO_TABLE,
      modelName: 'Certificado',
      timestamps: false
    }
  }
}

module.exports = {
  CERTIFICADO_TABLE,
  CertificadoSchema,
  Certificado
}