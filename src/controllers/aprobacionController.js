const AprobacionService = require('../services/aprobacionService')

const createAprobacion = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await AprobacionService.create({
            cedula: body.cedula,
            tipoFormulario: body.tipoFormulario,
            agencia: body.agencia,
            usuarioSolicitante: body.usuarioSolicitante,
            fechaSolicitud: body.fechaSolicitud,
            quienAprueba: body.quienAprueba,
            fechaAprobacion: body.fechaAprobacion,
            detalleAprobacion: body.detalleAprobacion,
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

module.exports = {
    createAprobacion,
}