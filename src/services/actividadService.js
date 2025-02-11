const { models } = require('../libs/sequelize')

const find = () => {
  const actividad = models.actividad.findAll()
  return actividad
}

module.exports = {
  find
}