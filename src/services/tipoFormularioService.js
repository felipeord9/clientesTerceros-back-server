const { models } = require('../libs/sequelize')

const find = () => {
  const tipos = models.TipoFormulario.findAll()
  return tipos
}

module.exports = {
  find
}