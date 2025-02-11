const { Model, DataTypes, Sequelize } = require("sequelize");

const DOCUMENT_TABLE = 'documents'

const DocumentSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo:{
    type:DataTypes.STRING,
    allowNull:false
  }
}

class Document extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCUMENT_TABLE,
      modelName: 'documents',
      timestamps: false
    }
  }
}

module.exports = {
  DOCUMENT_TABLE,
  DocumentSchema,
  Document
}