const { models } = require('../libs/sequelize')

const find = () => {
  const ciudades = models.ciudades.findAll()
  return ciudades
}

const findByCodigo = async (city)=>{
  const ciudad = models.ciudades.findOne({
    where : {codigo:city}
  })
  if(!ciudad) throw boom.notFound('ciudad no encontrada')
  
  return ciudad
}

const create = async (body) =>{
  const newCiudad = models.ciudades.create(body)
  return newCiudad
}

const findOne = async (id) => {
  const ciudad = await models.ciudades.findByPk(id)

  if(!ciudad) throw boom.notFound('ciudad no encontrado')

  return ciudad
}

const update = async (id, changes) => {
  const ciudad = await findOne(id)
  const updatedCiudad = await ciudad.update(changes)

  return updatedCiudad
}

const remove = async (id) => {
  const ciudad = await findOne(id)
  await ciudad.destroy(id)
  return id
}

module.exports = {
  find,
  findByCodigo,
  findOne,
  create,
  update,
  remove,
}