const RechazoService = require('../services/rechazoService')

const createRechazo = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await RechazoService.create({
            idrct: body.idrct,
            cedula: body.cedula,
            tipoFormulario: body.tipoFormulario,
            agencia: body.agencia,
            usuarioSolicitante: body.usuarioSolicitante,
            fechaSolicitud: body.fechaSolicitud,
            quienRechaza: body.quienRechaza,
            fechaRechazo: body.fechaRechazo,
            detalleRechazo: body.detalleRechazo,
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
    createRechazo,
}