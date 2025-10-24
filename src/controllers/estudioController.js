const EstudioService = require('../services/estudioService')

const findAllEstudios = async(req,res,next)=>{
    try{
        const data=await EstudioService.find()

        res.status(200).json({
            message:'OK',
            data
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const createEstudio = async (req,res,next)=>{
    try{
        const { body } = req
        console.log(body)
        const data = await EstudioService.create({
            nivel: body.nivel,
            estado: body.estado,
            titulo: body.titulo,
            establecimiento: body.establecimiento,
            semestre: body.semestre,
            empleadoId: 1
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

const updateEstudio = async (req, res, next) => {
    try {
      const { params: { id }, body } = req
      const data = await EstudioService.update(id, body)
  
      res.json(200).json({
        message: 'Updated',
        data
      })
    } catch (error) {
      next(error)
    }
  }
const findOneEstudio = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await EstudioService.findOne(id);
  
      res.status(200).json({
        message: 'OK',
        data
      })
    } catch (error) {
      next(error)
    }
  };


module.exports = {
    findAllEstudios,
    findOneEstudio,
    createEstudio,
    updateEstudio,
}