const EmpleadoService = require('../services/empleadoService')
const EstudioService = require('../services/estudioService')
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

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
    console.log(body)
    const razonSocial = req.body.razonSocial;
    console.log(razonSocial)
    const data = await EmpleadoService.sendMail(body)
    res.status(200).json({message:'Enviado',data})
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const verifyTokenWithId = async (req, res, next) =>{
  try{
    const { params: { token }} = req
    
    jwt.verify(token, config.jwtSecret, async (err, decoded) =>{
      if (err) {
        return res.status(401).json({ message: "Token inválido o expirado" });
      }else{
        
        const data = await EmpleadoService.findOne(decoded.id)

        res.status(200).json({
            message:'Token válido',
            data
        })
      }
    })
  } catch(error){
    console.log(error)
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
        const { body } = req
        console.log(body)
        const data = await EmpleadoService.create({
            estado: body.estado,
            rowId: body.rowId,
            tipoDocumento: body.tipoDocumento,
            primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            primerNombre: body.primerNombre,
            otrosNombres:body.otrosNombres,
            fechaNacimiento: body.fechaNacimiento,
            genero: body.genero,
            tipoContrato : body.tipoContrato,
            fechaInicio: body.fechaInicioContrato,
            fechaFinal: body.fechaFinContrato,
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
            docHV: body.docHV,
            docEps: body.docEps,
            docCajaCompensacion: body.docCajaCompensacion,
            docOtroSi: body.docOtroSi,
            docExaIngreso: body.docExaIngreso,
            docARL: body.docARL,
            docEscolaridad: body.docEscolaridad,
            docOtros: body.docOtros,
            createdAt:body.createdAt,
            userName:body.createdBy, 
            observations: body.observations,  
            estudios: body.estudios,   
        })

        for(let estudio of body.estudios) {
          await EstudioService.create({
            nivel: estudio.nivel,
            estado: estudio.estado,
            titulo: estudio.titulo,
            establecimiento: estudio.establecimiento,
            semestre: estudio.semestre,
            empleadoId: data.id
          })
        }

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

      //actualizar informacion del empleado
      const data = await EmpleadoService.update(id, {
            /* rowId: body.rowId, */
            tipoDocumento: body.tipoDocumento,
            /* primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            primerNombre: body.primerNombre,
            otrosNombres:body.otrosNombres, */
            fechaNacimiento: body.fechaNacimiento,
            genero: body.genero,
            tipoContrato : body.tipoContrato,
            fechaInicio: body.fechaInicioContrato,
            fechaFinal: body.fechaFinContrato,
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
            docHV: body.docHV,
            docEps: body.docEps,
            docCajaCompensacion: body.docCajaCompensacion,
            docOtroSi: body.docOtroSi,
            docExaIngreso: body.docExaIngreso,
            docARL: body.docARL,
            docEscolaridad: body.docEscolaridad,
            docOtros: body.docOtros,
            observations: body.observations,  
            estudios: body.estudios,   
      })

      ////actualizar informacion de los estudios
      //buscar los estudios con el id del empleado
      const estudiosExistentes = await EstudioService.findBypk(id); 
      //obtener los id de los estudios existentes
      const idsExistentes = estudiosExistentes.map(est => est.id);
      //obtener los id de los estudios recibidos desde el front
      const idsRecibidos = body.estudios.filter(e => e.id).map(e => e.id);

      // a. Eliminar estudios que ya no están en la lista recibida
      const idsAEliminar = idsExistentes.filter(id => !idsRecibidos.includes(id));
      if (idsAEliminar.length > 0) {
        await EstudioService.suprimir(idsAEliminar);
      }

      // b. Crear nuevos estudios
      const nuevosEstudios = body.estudios.filter(e => !e.id);
      for(let estudio of nuevosEstudios) {
          await EstudioService.create({
            nivel: estudio.nivel,
            estado: estudio.estado,
            titulo: estudio.titulo,
            establecimiento: estudio.establecimiento,
            semestre: estudio.semestre,
            empleadoId: id
          })
        }

      // c. (Opcional) Actualizar los estudios existentes
      const estudiosAActualizar = body.estudios.filter(e => e.id && idsExistentes.includes(e.id));
      for (let est of estudiosAActualizar) {
        await EstudioService.update(est.id,{
          nivel: est.nivel,
          estado: est.estado,
          titulo: est.titulo,
          establecimiento: est.establecimiento,
          semestre: est.semestre,
        });
      }
  
      res.status(200).json({
        message: 'Updated',
        data
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

const updateEmployee = async (req, res, next) => {
    try {
      const { params: { id }, body } = req
      const data = await EmpleadoService.update(id, body)
  
      res.status(200).json({
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
    updateEmployee,
    send,
    correoRespuesta,
    verifyTokenWithId,
}