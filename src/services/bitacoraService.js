const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

const find=()=>{
  const Bitacoras = models.Bitacora.findAll()
  return Bitacoras
};

const findOne = async (usuario) => {
  const bitacora = await models.Bitacora.findOne({where:{usuario:usuario}})

  if(!bitacora) throw boom.notFound('Error')

  return bitacora
}

/* const findByEmail = async (email) => {
  const user = await models.User.findOne({
   where: {email: email }
})

  if(!user) throw boom.notFound('Usuario no encontrado')

  return user
} */

const create = async(body)=>{
    const newBitacora = await models.Bitacora.create(body)
    return newBitacora    
}

const update = async (email, changes) => {
  const bitacora = await findOne(email)
  const updatedBitacora = await bitacora.update(changes)

  return updatedBitacora
}

const remove = async (email) => {
  const bitacora = await findOne(email)
  await bitacora.destroy(email)
  return id
}

module.exports = {
  find,
  findOne,
/*   findByEmail, */
  create,
  update,
  remove
}