const { models } = require('../libs/sequelize')

const find = () => {
  const documents = models.documents.findAll()
  return documents
}

module.exports = {
  find
}