const { models } = require('../libs/sequelize')

const find = () => {
  const contratos = models.contrato.findAll()
  return contratos
}

const create = async (body) =>{
  console.log(body)
  const newContrato = models.contrato.create(body)
  return newContrato
}

const findOne = async (id) => {
  const contrato = await models.contrato.findByPk(id)

  if(!contrato) throw boom.notFound('contrato no encontrado')

  return contrato
}

const update = async (id, changes) => {
  const contrato = await findOne(id)
  const updatedContrato = await contrato.update(changes)

  return updatedContrato
}

const remove = async (id) => {
  const contrato = await findOne(id)
  await contrato.destroy(id)
  return id
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}