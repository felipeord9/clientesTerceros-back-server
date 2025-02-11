const ActividadService = require('../services/actividadService')

const findAllActividad = async (req, res, next) => {
  try {
    const data = await ActividadService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllActividad
}