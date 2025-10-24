const ContratoService = require('../services/contratoService')

const findAllContratos = async (req, res, next) => {
  try {
    const data = await ContratoService.find()
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const findOne = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await ContratoService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createContrato = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await ContratoService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const updateContrato = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await ContratoService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteContrato = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await ContratoService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllContratos,
  findOne,
  createContrato,
  updateContrato,
  deleteContrato,
}