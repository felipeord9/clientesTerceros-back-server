const { models } = require('../libs/sequelize')

const find = () => {
  const cargos = models.cargo.findAll()
  return cargos
}

const findByCodigo = async (codigo)=>{
  const cargo = models.cargo.findOne({
    where: {
        codigo
    }
  })
  if(!cargo) throw boom.notFound('cargo no encontrada')
  
  return cargo
}

const create = async (body) =>{
  const newCargo = models.cargo.create(body)
  return newCargo
}

const findOne = async (id) => {
  const cargo = await models.cargo.findByPk(id)

  if(!cargo) throw boom.notFound('cargo no encontrado')

  return cargo
}

const update = async (id, changes) => {
  const cargo = await findOne(id)
  const updatedCargo = await cargo.update(changes)

  return updatedCargo
}

const remove = async (id) => {
  const cargo = await findOne(id)
  await cargo.destroy(id)
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