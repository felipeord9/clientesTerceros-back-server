const { models } = require('../libs/sequelize')

const find = () => {
  const precios = models.precio.findAll()
  return precios
}

const create = async(body)=>{
  const newPrecio = await models.precio.create(body)
  return newPrecio    
}

const findOne = async (id) => {
  const precio = await models.precio.findByPk(id)

  if(!precio) throw boom.notFound('precio no encontrado')

  return precio
}

const update = async (id, changes) => {
  const precio = await findOne(id)
  const updatedPrecio = await precio.update(changes)

  return updatedPrecio
}

const remove = async (id) => {
  const precio = await findOne(id)
  await precio.destroy(id)
  return id
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}