const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")

const SUCURSAL_TABLE = 'sucursales';

const SucursalSchema = {
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
    codigoSucursal:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'codigo_sucursal',
    },
    nombreSucursal:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'nombre_sucursal'
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'direccion'
    },
    departamento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'departamento'
    },
    ciudad:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'ciudad'
    },
    celular:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'telefono_celular'
    },
    correoFacturaElectronica:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'correo_fe'
    },
    nombreContacto:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'nombre_contacto',
    },
    celularContacto:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'celular_contacto',
    },
    correoContacto:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'correo_contacto',
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
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
};

class Sucursal extends Model{
    static associate(models){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName:SUCURSAL_TABLE,
            modelName:'Sucursales',
            timestamps:false,
        };
    }
}

module.exports = {
    SUCURSAL_TABLE,
    SucursalSchema,
    Sucursal,
};