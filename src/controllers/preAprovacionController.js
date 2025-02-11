const PreAprovacionService = require('../services/preAprovacionService')

const findAllPreAprovacion = async(req,res,next)=>{
    try{
        const data=await PreAprovacionService.find()

        res.status(200).json({
            message:'OK',
            data
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const createPreAprovacion = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await PreAprovacionService.create({
            cedula: body.cedula,
            razonSocial: body.razonSocial,
            fechaRenovaCcio: body.fechaRenovaCcio,
            puntajeDataCredito: body.puntajeDataCredito,
            capitalTrabajo: body.capitalTrabajo,
            razonEndeudamiento: body.razonEndeudamiento,
            IndiceSolvencia: body.IndiceSolvencia,
            observations:body.observations,
            docRut:body.docRut,
            docCcio:body.docCcio,
            docRefcom:body.docRefcom,
            docRefcom2:body.docRefcom2,
            docInfemp:body.docInfemp,
            docVboAg: body.docVboAg,
            docVboDc: body.docVboDc,
            docVboDf: body.docVboDf,
            estadoVboAg: body.estadoVboAg,
            estadoVboDc: body.estadoVboDc,
            estadoVboDf: body.estadoVboDf,
            nivelEndeudamiento: body.nivelEndeudamiento,
            cupoRecomendado: body.cupoRecomendado,
            cupoAprovado: body.cupoAprovado,
            plazoAprovado: body.plazoAprovado,
            fechaCreacion: body.fechaCreacion,
            plazoRecomendado: body.plazoRecomendado,
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
const updatePreAprovacion = async (req, res, next) => {
    try {
      const { params: { id }, body } = req
      const data = await PreAprovacionService.update(id, body)
  
      res.json(200).json({
        message: 'Updated',
        data
      })
    } catch (error) {
      next(error)
    }
  }
const findOnePreAprovacion = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await PreAprovacionService.findOne(id);
  
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
        const data = await PreAprovacionService.validarPreAprovacion(cedula);

        res.status(200).json({
            message: 'OK',
            data
          })
        } catch (error) {
          next(error)
        }
  }

const deletePreAprovacion = async(req,res,next)=>{
    try{
        const {params:{id}}=req
        const data = await PreAprovacionService.remove(id)
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
    const data = await PreAprovacionService.removeByCedula(cedula)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
} 

module.exports = {
    findAllPreAprovacion,
    createPreAprovacion,
    findOnePreAprovacion,
    deletePreAprovacion,
    validar,
    updatePreAprovacion,
    deleteByCedula,
    
}