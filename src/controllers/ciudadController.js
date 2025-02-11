const CiudadService = require('../services/ciudadService')

const findAllCiudades = async (req, res, next) => {
  try {
    const data = await CiudadService.find()
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const findOneCiudad =async (req, res, next)=>{
  try {
    const { params: { city } } = req;
    const data = await CiudadService.findByCodigo(city);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
}

const findOneCity = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await CiudadService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createCiudad = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await CiudadService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateCiudad = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await CiudadService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteCiudad = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await CiudadService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllCiudades,
  findOneCiudad,
  findOneCity,
  createCiudad,
  updateCiudad,
  deleteCiudad,
}