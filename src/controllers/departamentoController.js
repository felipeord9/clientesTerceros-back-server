const DepartamentoService = require('../services/departamentoService')

const findAllDepartamentos = async (req, res, next) => {
  try {
    const data = await DepartamentoService.find()
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const findOneDepartamento = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await DepartamentoService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createDepartamento = async ( req , res , next ) => {
  try{
    const { body } = req
    console.log(body)
    const data = await DepartamentoService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateDepartamento = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await DepartamentoService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteDepartamento = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await DepartamentoService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllDepartamentos,
  findOneDepartamento,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
}