const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")

const EMPLEADO_TABLE = 'empleados';

const EmpleadoSchema={
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rowId:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    tipoDocumento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'tipo_documento'
    },
    primerApellido:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'primer_apellido'
    },
    segundoApellido:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'segundo_apellido'
    },
    primerNombre:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'primer_nombre'
    },
    otrosNombres:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'otros_nombres'
    },
    numeroCelular:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "numero_celular",
    },
    numeroTelefono:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'numero_telefono'
    },
    correo:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'correo_electronico'
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    departamento:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ciudad:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    agencia:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    docCedula:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field: "doc_cedula",
    },
    docContrato:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field: "doc_contrato",
    },
    docInfemp:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_infemp",
    },
    docOtros:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_otros",
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "fecha_creacion",
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'usuario_creador',
        /* references: {
          model: USER_TABLE,
          key: "id",
        }, */
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    },
};

class Empleado extends Model{
    static associate(models){
        /* this.belongsTo(models.User,{as:'user'}) */
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:EMPLEADO_TABLE,
            modelName:'Empleados',
            timestamps:false,
        };
    }
}
module.exports = {
    EMPLEADO_TABLE,
    EmpleadoSchema,
    Empleado,
  };