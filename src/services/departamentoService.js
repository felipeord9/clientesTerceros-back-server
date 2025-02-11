const { models } = require('../libs/sequelize')

const find = () => {
  const departamentos = models.departamentos.findAll()
  return departamentos
}

const create = async (body) =>{
  const newDepartamento = models.departamentos.create(body)
  return newDepartamento
}

const findOne = async (id) => {
  const departamento = await models.departamentos.findByPk(id)

  if(!departamento) throw boom.notFound('departamento no encontrado')

  return departamento
}

const update = async (id, changes) => {
  const departamento = await findOne(id)
  const updatedDepartamento = await departamento.update(changes)

  return updatedDepartamento
}

const remove = async (id) => {
  const departamento = await findOne(id)
  await departamento.destroy(id)
  return id
}

module.exports = {
  find,
  create,
  update,
  findOne,
  remove,
}