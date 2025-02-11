const DetalleService = require('../services/detalleService')

const findAllDetalles = async (req, res, next) => {
  try {
    const data = await DetalleService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllDetalles
}