const { models } = require('../libs/sequelize')

const find = () => {
  const responsabilidad = models.responsabilidad.findAll()
  return responsabilidad
}

module.exports = {
  find
}