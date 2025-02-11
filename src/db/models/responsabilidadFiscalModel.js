const { Model, DataTypes, Sequelize } = require("sequelize");

const RESPONSABILIDAD_FISCAL_TABLE = 'responsabilidad'

const ResponsabilidadFiscalSchema = {
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

class ResponsabilidadFiscal extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESPONSABILIDAD_FISCAL_TABLE,
      modelName: 'responsabilidad',
      timestamps: false
    }
  }
}

module.exports = {
  RESPONSABILIDAD_FISCAL_TABLE,
  ResponsabilidadFiscalSchema,
  ResponsabilidadFiscal
}