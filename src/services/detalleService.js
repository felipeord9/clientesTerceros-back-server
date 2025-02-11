const { models } = require('../libs/sequelize')

const find = () => {
  const detalles = models.detalle.findAll()
  return detalles
}

module.exports = {
  find
}