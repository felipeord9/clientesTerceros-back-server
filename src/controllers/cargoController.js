const CargoService = require('../services/cargoService')

const findAllCargos = async (req, res, next) => {
  try {
    const data = await CargoService.find()
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const findOneCargo =async (req, res, next)=>{
  try {
    const { params: { codigo } } = req;
    const data = await CargoService.findByCodigo(codigo);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
}

const findOne = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await CargoService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createCargo = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await CargoService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateCargo = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await CargoService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteCargo = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await CargoService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllCargos,
  findOneCargo,
  findOne,
  createCargo,
  updateCargo,
  deleteCargo,
}