const { Model, DataTypes, Sequelize } = require("sequelize");

const REGIMEN_FISCAL_TABLE = 'regimen'

const RegimenFiscalSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class RegimenFiscal extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGIMEN_FISCAL_TABLE,
      modelName: 'regimen',
      timestamps: false
    }
  }
}

module.exports = {
  REGIMEN_FISCAL_TABLE,
  RegimenFiscalSchema,
  RegimenFiscal
}