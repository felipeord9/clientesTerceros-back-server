const ResponsabilidadService = require('../services/responsabilidadService')

const findAllResponsabilidad = async (req, res, next) => {
  try {
    const data = await ResponsabilidadService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllResponsabilidad
}