const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

const find = async () => {
  const users = await models.User.findAll({
    /* where: {
      role: {
        [Op.not]: 'admin'
      }
    },
    attributes: {
      exclude: 'password'
    } */
  })
  return users
}

const findOne = async (id) => {
  const user = await models.User.findByPk(id)

  if(!user) throw boom.notFound('Usuario no encontrado')

  return user
}

const findByName = async (name) => {
  const user = await models.User.findOne({
   where: {name }
})

  if(!user) throw boom.notFound('Usuario no encontrado')

  return user
}

const findByEmail = async (email) => {
  const user = await models.User.findOne({
   where: {email }
})

  if(!user) throw boom.notFound('Usuario no encontrado')

  return user
}

const compararContraseña = async (body)=>{
  const user = await findByEmail(body.email);
  const passwordMatch  = await bcrypt.compare(body.password,user.password)
  if(passwordMatch){
    return user
  }else{
    throw boom.notFound('Contraseña actual incorrecta')
  }
}

const create = async (data) => {
  const hash = bcrypt.hashSync(data.password, 10)
  const newUser = await models.User.create({
    ...data,
    password: hash
  })
  delete newUser.dataValues.password
  return newUser
}

const update = async (id, changes) => {
  const user = await findOne(id)
  const updatedUser = await user.update(changes)

  return updatedUser
}

const remove = async (id) => {
  const user = await findOne(id)
  await user.destroy(id)
  return id
}

const removeByName = async(name)=>{
  const user = await findByName(name)
  await user.destroy(name)
  return name
}
module.exports = {
  find,
  findOne,
  findByEmail,
  findByName,
  create,
  update,
  remove,
  removeByName,
  compararContraseña,
}