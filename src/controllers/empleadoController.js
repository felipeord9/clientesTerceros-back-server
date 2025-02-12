const EmpleadoService = require('../services/empleadoService')

const findAllEmpleados = async(req,res,next)=>{
    try{
        const data=await EmpleadoService.find()

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
    const data = await EmpleadoService.sendMail(body)
    res.status(200).json({message:'Enviado',data})
  } catch (error) {
    next(error)
  }
}

const correoRespuesta = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await EmpleadoService.respuesta(body)
    res.status(200).json({
      message:'Enviado'
      ,data
    })
  } catch (error) {
    next(error)
  }
}

const createEmpleado = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await EmpleadoService.create({
            rowId: body.rowId,
            tipoDocumento: body.tipoDocumento,
            primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            primerNombre: body.primerNombre,
            otrosNombres:body.otrosNombres,
            numeroCelular: body.numeroCelular,
            numeroTelefono: body.numeroTelefono,
            correo: body.correo,
            direccion: body.direccion,
            departamento: body.departamento,
            ciudad: body.ciudad,
            agencia: body.agencia,
            cargo: body.cargo,
            docCedula: body.docCedula,
            docContrato: body.docContrato,
            docInfemp: body.docInfemp,
            docOtros: body.docOtros,
            createdAt:body.createdAt,
            userName:body.createdBy, 
            observations: body.observations,       
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
const updateEmpleado = async (req, res, next) => {
    try {
      const { params: { id }, body } = req
      const data = await EmpleadoService.update(id, body)
  
      res.json(200).json({
        message: 'Updated',
        data
      })
    } catch (error) {
      next(error)
    }
  }
const findOneEmpleado = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await EmpleadoService.findOne(id);
  
      res.status(200).json({
        message: 'OK',
        data
      })
    } catch (error) {
      next(error)
    }
  };

const findEmpleadoByCedula = async (req, res, next) => {
  try{
    const { params: {cedula} } = req;
    const data = await EmpleadoService.findByCedula(cedula)

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}


module.exports = {
    findAllEmpleados,
    findEmpleadoByCedula,
    findOneEmpleado,
    createEmpleado,
    updateEmpleado,
    send,
    correoRespuesta,
}