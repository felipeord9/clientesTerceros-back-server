const ClasificacionService = require('../services/clasificacionService')

const findAllClasificaciones = async (req, res, next) => {
  try {
    const data = await ClasificacionService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const findOneClasificacion = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await ClasificacionService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createClasificacion = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await ClasificacionService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateClasificacion = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await ClasificacionService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteClasificacion = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await ClasificacionService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllClasificaciones,
  createClasificacion,
  updateClasificacion,
  findOneClasificacion,
  deleteClasificacion,
}