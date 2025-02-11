const { models } = require('../libs/sequelize')

const find = async() => {
  const clasificacion = await models.clasificacion.findAll()
  return clasificacion
}

const create = async (body) =>{
  const newClasificacion = models.clasificacion.create(body)
  return newClasificacion
}

const findOne = async (id) => {
  const clasificacion = await models.clasificacion.findByPk(id)

  if(!clasificacion) throw boom.notFound('clasificacion no encontrado')

  return clasificacion
}

const update = async (id, changes) => {
  const clasificacion = await findOne(id)
  const updatedClasificacion = await clasificacion.update(changes)

  return updatedClasificacion
}

const remove = async (id) => {
  const clasificacion = await findOne(id)
  await clasificacion.destroy(id)
  return id
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}