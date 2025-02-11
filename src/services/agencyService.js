const { models } = require('../libs/sequelize')

const find = () => {
  const agencies = models.Agency.findAll()
  return agencies
}

const create = async (body) =>{
  const newAgency = models.Agency.create(body)
  return newAgency
}

const findOne = async (id) => {
  const agency = await models.Agency.findByPk(id)

  if(!agency) throw boom.notFound('agency no encontrado')

  return agency
}

const update = async (id, changes) => {
  const agency = await findOne(id)
  const updatedAgency = await agency.update(changes)

  return updatedAgency
}

const remove = async (id) => {
  const agency = await findOne(id)
  await agency.destroy(id)
  return id
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}