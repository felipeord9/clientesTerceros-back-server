const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")

const PRE_APROVACION_TABLE = 'preaprovacion';

const PreAprovacionSchema={
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cedula:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'codigo_siesa'
    },
    razonSocial:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'razon_social'
    },
    fechaRenovaCcio:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'fecha_last_renova_ccio'
    },
    puntajeDataCredito:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'puntaje_data_credito'
    },
    capitalTrabajo:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'capital_de_trabajo'
    },
    razonEndeudamiento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'razon_endeudamiento'
    },
    IndiceSolvencia:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'indice_solvencia',
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    docRut:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_rut",
    },
    docCcio:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_ccio",
    },
    docRefcom:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_refcom",
    },
    docRefcom2:{
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "doc_refcom_2",
    },
    docInfemp:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_infemp",
    },
    docVboAg:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'doc_vbo_ag'
    },
    docVboDc:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'doc_vbo_dc'
    },
    docVboDf:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'doc_vbo_df'
    },
    estadoVboAg:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'estado_vbo_ag'
    },
    estadoVboDc:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'estado_vbo_dc'
    },
    estadoVboDf:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'estado_vbo_df'
    },
    nivelEndeudamiento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'nivel_endeudamiento'
    },
    cupoRecomendado:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'cupo_recomendado'
    },
    plazoRecomendado:{
        type:DataTypes.DATE,
        allowNull:false,
        field:'plazo_recomendado'
    },
    cupoAprovado:{
        type:DataTypes.STRING,
        field:'cupo_aprovado'
    },
    plazoAprovado:{
        type:DataTypes.STRING,
        field:'plazo_aprovado'
    },
    fechaCreacion:{
        type: DataTypes.DATE,
        field:'fecha_creacion',
        allowNull:false
    }
};

class PreAprovacion extends Model{
    static associate(models){
        /* this.belongsTo(models.User,{as:'user'}) */
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:PRE_APROVACION_TABLE,
            modelName:'PreAprovacion',
            timestamps:false,
        };
    }
}
module.exports = {
    PRE_APROVACION_TABLE,
    PreAprovacionSchema,
    PreAprovacion,
  };