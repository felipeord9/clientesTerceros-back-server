const TipoFormularioService = require('../services/tipoFormularioService')

const findAllTipos = async (req, res, next) => {
  try {
    const data = await TipoFormularioService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllTipos
}