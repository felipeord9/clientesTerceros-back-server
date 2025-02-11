const CategoriaRechazoService = require('../services/categoriaRechazoService')

const findAllCategorias = async (req, res, next) => {
  try {
    const data = await CategoriaRechazoService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllCategorias
}