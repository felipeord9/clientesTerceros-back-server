const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")

const PROVEEDOR_TABLE = 'proveedores';

const ProveedorSchema={
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
    numeroDocumento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'no_Idenficacion'
    },
    tipoDocumento:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'tipo_documento'
    },
    tipoPersona:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'tipo_persona'
    },
    razonSocial:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'razon_social'
    },
    primerApellido:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'primer_apellido'
    },
    segundoApellido:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'segundo_apellido'
    },
    primerNombre:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'primer_nombre'
    },
    otrosNombres:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'otros_nombres'
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
     direccion:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'direccion'
    },
    celular:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'celular'
    },
    telefono:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'telefono'
    },
    correoElectronico:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'correo_electronico'
    },
    actividadEconomica:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'actividad_economica'
    },
    correoFacturaElectronica:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'correo_fe'
    },
    tipoDocRepLegal:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'tipo_doc_replegal'
    },
    numeroDocRepLegal:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'numero_doc_replegal'
    },
    nameRepLegal:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'name_replegal'
    },
    apellidoRepLegal:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'apellido_replegal'
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
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
    solicitante:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "solicitante",
    },
    docVinculacion:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_vinculacion",
    },
    docComprAntc:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_comprAntc",
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
    docCrepL:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_crepL",
    },
    docEf:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_ef",
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
    docRefcom3:{
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "doc_refcom_3",
    },
    docInfemp:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_infemp",
    },
    docInfrl:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_infrl",
    },
    docCerBan:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:'doc_cerban'
    },
    docValAnt:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:'doc_valant'
    },
    docOtros:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "doc_otros",
    },
    agencia:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'agencia'
    },
    tipoFormulario:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'tipo_formulario'
    },
    actulizado:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    fechaActualizacion:{
        type: DataTypes.DATE,
        allowNull: true,
        field: "fecha_actualizacion",
    },
    pendiente:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    rechazado:{
        type:DataTypes.STRING,
        allowNull:true
    },
    aprobado:{
        type:DataTypes.STRING,
        allowNull:true,
    }
    
};

class Proveedor extends Model{
    static associate(models){
        /* this.belongsTo(models.User,{as:'user'}) */
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:PROVEEDOR_TABLE,
            modelName:'Proveedores',
            timestamps:false,
        };
    }
}
module.exports = {
    PROVEEDOR_TABLE,
    ProveedorSchema,
    Proveedor,
  };