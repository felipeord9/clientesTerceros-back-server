const { Model, DataTypes, Sequelize } = require("sequelize");

const CATEGORIA_RECHAZO_TABLE = 'categoriarechazo'

const CategoriaRechazoSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    field:'id_rct'
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'descrip_rct'
  }
}

class CategoriaRechazo extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIA_RECHAZO_TABLE,
      modelName: 'CategoriaRechazo',
      timestamps: false
    }
  }
}

module.exports = {
  CATEGORIA_RECHAZO_TABLE,
  CategoriaRechazoSchema,
  CategoriaRechazo
}