"use strict";
const { PRECIO_TABLE, PrecioSchema} = require('../models/preciosModel')
const { RESPONSABILIDAD_FISCAL_TABLE,ResponsabilidadFiscalSchema } =require('../models/responsabilidadFiscalModel')
const { REGIMEN_FISCAL_TABLE, RegimenFiscalSchema} = require('../models/regFiscalModel')
const { CLIENTE_TABLE, ClienteSchema } = require('../models/clienteModel');
const { DETALLE_TABLE, DetalleSchema} = require('../models/detalleModel');
const { DEPARTAMENTO_TABLE, DepartamentoSchema} = require('../models/departamentoModel');
const { CIUDAD_TABLE,CiudadSchema } =require('../models/ciudadModel')
const { DOCUMENT_TABLE, DocumentSchema } = require("../models/documentModel");
const { USER_TABLE, UserSchema} = require('../models/userModel')
const { AGENCY_TABLE, AgencySchema } = require("../models/agencyModel");
const { PROVEEDOR_TABLE, ProveedorSchema } = require('../models/proveedoresModel');
const { ACTIVIDAD_ECONOMICA_TABLE, ActividadEconomicaSchema} = require("../models/actividadModel")
const { CLASIFICACION_TABLE,ClasificacionSchema } = require('../models/clasificacionModel')
const { BITACORA_TABLE,BitacoraSchema } = require('../models/bitacoraModel')
const { SUCURSAL_TABLE,SucursalSchema } = require('../models/sucursalModel')
const { PRE_APROVACION_TABLE,PreAprovacionSchema } = require('../models/preAprovacionModel')
const { CERTIFICADO_TABLE, CertificadoSchema } = require("../models/certificadoModel");
const { TIPO_FORMULARIO_TABLE, TipoFormularioSchema } = require("../models/tipoFormularioModel");
const { RECHAZADOS_TABLE, RechazadosSchema } = require("../models/rechazadosModel");
const { CATEGORIA_RECHAZO_TABLE, CategoriaRechazoSchema } = require("../models/categoriaRechazoModel");
const { APROBADOS_TABLE, AprobadosSchema } = require("../models/aprobadosModel");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(RECHAZADOS_TABLE,RechazadosSchema);
    await queryInterface.createTable(CATEGORIA_RECHAZO_TABLE,CategoriaRechazoSchema);
    await queryInterface.createTable(APROBADOS_TABLE,AprobadosSchema);
    await queryInterface.createTable(CERTIFICADO_TABLE,CertificadoSchema);
    await queryInterface.createTable(ACTIVIDAD_ECONOMICA_TABLE,ActividadEconomicaSchema);
    await queryInterface.createTable(SUCURSAL_TABLE,SucursalSchema);
    await queryInterface.createTable(DEPARTAMENTO_TABLE,DepartamentoSchema);
    await queryInterface.createTable(CLIENTE_TABLE,ClienteSchema);
    await queryInterface.createTable(PRECIO_TABLE,PrecioSchema);
    await queryInterface.createTable(RESPONSABILIDAD_FISCAL_TABLE,ResponsabilidadFiscalSchema);
    await queryInterface.createTable(CIUDAD_TABLE,CiudadSchema);
    await queryInterface.createTable(DOCUMENT_TABLE,DocumentSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(BITACORA_TABLE, BitacoraSchema);
    await queryInterface.createTable(PROVEEDOR_TABLE,ProveedorSchema);
    await queryInterface.createTable(DETALLE_TABLE,DetalleSchema);
    await queryInterface.createTable(REGIMEN_FISCAL_TABLE,RegimenFiscalSchema);
    await queryInterface.createTable(PRE_APROVACION_TABLE,PreAprovacionSchema);
    await queryInterface.createTable(AGENCY_TABLE, AgencySchema);
    await queryInterface.createTable(CLASIFICACION_TABLE,ClasificacionSchema);
    await queryInterface.createTable(TIPO_FORMULARIO_TABLE,TipoFormularioSchema);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(RECHAZADOS_TABLE);
    await queryInterface.dropTable(CATEGORIA_RECHAZO_TABLE);
    await queryInterface.dropTable(APROBADOS_TABLE);
    await queryInterface.dropTable(CERTIFICADO_TABLE);
    await queryInterface.dropTable(PRE_APROVACION_TABLE);
    await queryInterface.dropTable(SUCURSAL_TABLE);
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);
    await queryInterface.dropTable(DETALLE_TABLE);
    await queryInterface.dropTable(ACTIVIDAD_ECONOMICA_TABLE);
    await queryInterface.dropTable(CIUDAD_TABLE);
    await queryInterface.dropTable(PRECIO_TABLE);
    await queryInterface.dropTable(PROVEEDOR_TABLE);
    await queryInterface.dropTable(BITACORA_TABLE);
    await queryInterface.dropTable(RESPONSABILIDAD_FISCAL_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(REGIMEN_FISCAL_TABLE);
    await queryInterface.dropTable(AGENCY_TABLE);
    await queryInterface.dropTable(CLASIFICACION_TABLE);
    await queryInterface.dropTable(DOCUMENT_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(TIPO_FORMULARIO_TABLE);

  },
};
