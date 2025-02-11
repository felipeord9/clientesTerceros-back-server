const { models } = require('../libs/sequelize')

const find = () => {
  const regimen = models.regimen.findAll()
  return regimen
}

module.exports = {
  find
}