const { models } = require('../libs/sequelize')

const find = () => {
  const categorias = models.CategoriaRechazo.findAll()
  return categorias
}

module.exports = {
  find
}