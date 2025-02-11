const PrecioService = require('../services/precioService')

const findAllPrecios = async (req, res, next) => {
  try {
    const data = await PrecioService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const findOnePrecio = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await PrecioService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createPrecio = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await PrecioService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updatePrecio = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await PrecioService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deletePrecio = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await PrecioService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllPrecios,
  createPrecio,
  updatePrecio,
  findOnePrecio,
  deletePrecio,
}