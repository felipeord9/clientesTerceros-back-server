const ClienteService = require('../services/clienteService')
const { models } = require("../libs/sequelize");

const findAllClientes = async(req,res,next)=>{
    try{
        const data=await ClienteService.find()

        res.status(200).json({
            message:'OK',
            data
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const send = async (req, res, next) => {
  try {
    const { body } = req
    const data = await ClienteService.sendMail(body)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const duo = async(req,res,next)=>{
  try{
    const clientes = await models.Clientes.findAll()
    const Proveedores = await models.Proveedores.findAll()
    const combined = [...clientes,...Proveedores]
    res.status(200).json(
      combined
    )
  }catch(error){
    console.log(error)
    next(error)
  }
}

const createCliente = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await ClienteService.create({
            cedula: body.cedula,
            numeroDocumento: body.numeroDocumento,
            tipoDocumento: body.tipoDocumento,
            tipoPersona: body.tipoPersona,
            razonSocial: body.razonSocial,
            primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            primerNombre: body.primerNombre,
            otrosNombres:body.otrosNombres,
            departamento: body.departamento,
            ciudad: body.ciudad,
            direccion: body.direccion,
            celular: body.celular,
            telefono: body.telefono,
            correoNotificaciones: body.correoNotificaciones,
            nombreSucursal: body.nombreSucursal,
            direccionSucursal:body.direccionSucursal,
            departamentoSucursal:body.departamentoSucursal,
            ciudadSucursal: body.ciudadSucursal,
            celularSucursal: body.celularSucursal,
            telefonoSucursal: body.telefonoSucursal,
            correoSucursal: body.correoSucursal,
            correoFacturaElectronica:body.correoFacturaElectronica,
            regimenFiscal: body.regimenFiscal,
            responsabilidadFiscal: body.responsabilidadFiscal,
            detalleTributario: body.detalleTributario,
            tipoDocRepLegal: body.tipoDocRepLegal,
            numeroDocRepLegal: body.numeroDocRepLegal,
            nameRepLegal:body.nameRepLegal,
            apellidoRepLegal:body.apellidoRepLegal,
            valorEstimado: body.valorEstimado,
            precioSugerido: body.precioSugerido,
            observations:body.observations,
            createdAt:body.createdAt,
            userName:body.createdBy,
            solicitante:body.solicitante,
            docVinculacion:body.docVinculacion,
            docComprAntc:body.docComprAntc,
            docCtalnst:body.docCtalnst,
            docPagare:body.docPagare,
            docRut:body.docRut,
            docCcio:body.docCcio,
            docCrepL:body.docCrepL,
            docEf:body.docEf,
            docRefcom:body.docRefcom,
            docRefcom2:body.docRefcom2,
            docRefcom3:body.docRefcom3,
            docCvbo:body.docCvbo,
            docFirdoc:body.docFirdoc,
            docInfemp:body.docInfemp,
            docInfrl:body.docInfrl,
            docCerBan: body.docCerBan,
            docValAnt:body.docValAnt,
            docOtros:body.docOtros,
            clasificacion:body.clasificacion,
            agencia:body.agencia,
            tipoFormulario:body.tipoFormulario,  
            nombreComercial: body.nombreComercial,
            pendiente:body.pendiente,
            rechazado:body.rechazado,
            aprobado:body.aprobado,
        })
        res.status(201).json({
            message:'Created',
            data
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

const updateCliente = async (req, res, next) => {
    try {
      const { params: { id }, body } = req
      const data = await ClienteService.update(id, body)
  
      res.json(200).json({
        message: 'Updated',
        data
      })
    } catch (error) {
      next(error)
    }
  }

const findOneCliente = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await ClienteService.findOne(id);
  
      res.status(200).json({
        message: 'OK',
        data
      })
    } catch (error) {
      next(error)
    }
  };

const validar = async (req,res,next)=>{
    try{
        const{params:{cedula}}=req;
        const data = await ClienteService.validarCliente(cedula);

        res.status(200).json({
            message: 'OK',
            data
          })
        } catch (error) {
          next(error)
        }
}

const deleteCliente = async(req,res,next)=>{
    try{
        const {params:{id}}=req
        const data = await ClienteService.remove(id)
        res.status(200).json({
            message:'Deleted',
            data
        })
    } catch(error){
        next(error)
    }
}

const deleteByCedula = async (req, res, next) => {
  try {
    const { params: { cedula }} = req
    const data = await ClienteService.removeByCedula(cedula)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
} 

module.exports = {
    findAllClientes,
    createCliente,
    findOneCliente,
    deleteCliente,
    validar,
    updateCliente,
    deleteByCedula,
    duo,
    send,
}