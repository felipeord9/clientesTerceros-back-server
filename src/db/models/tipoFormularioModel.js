const { Model, DataTypes, Sequelize } = require("sequelize");

const TIPO_FORMULARIO_TABLE = 'tipoformulario'

const TipoFormularioSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class TipoFormulario extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_FORMULARIO_TABLE,
      modelName: 'TipoFormulario',
      timestamps: false
    }
  }
}

module.exports = {
  TIPO_FORMULARIO_TABLE,
  TipoFormularioSchema,
  TipoFormulario
}