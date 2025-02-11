const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

const find = async () => {
  const sucursales = await models.Sucursales.findAll({
    /* where: {
      role: {
        [Op.not]: 'admin'
      }
    },
    attributes: {
      exclude: 'password'
    } */
  })
  return sucursales
}

const findOne = async (id) => {
  const sucursal = await models.Sucursales.findByPk(id)

  if(!sucursal) throw boom.notFound('sucursal no encontrado')

  return sucursal
}

const findByName = async (nombreSucursal) => {
  const sucursal = await models.Sucursales.findOne({
   where: {nombreSucursal }
})

  if(!sucursal) throw boom.notFound('sucursal no encontrado')

  return sucursal
}

const findByEmail = async (email) => {
  const sucursal = await models.Sucursales.findOne({
   where: {email }
})

  if(!sucursal) throw boom.notFound('sucursal no encontrado')

  return sucursal
}
const findByCodigo = async (cedula) => {
    /* const consulta = `SELECT cedula FROM sucursales ORDER BY cedula DESC LIMIT 1`;
    models.Sucursales.sequelize.query(consulta,(error,resultados)=>{
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
          }
          if (resultados.length > 0) {
            const ultimoNumero = resultados[0].cedula;
            console.log('El último número de la tabla es:', ultimoNumero);
          } else {
            console.log('La tabla está vacía.');
          }
    })
    return consulta */
    const sucursal = await models.Sucursales.findOne({
        where: {cedula }
    })
  
    if(!sucursal) throw boom.notFound('sucursal no encontrado')

    const resultado = sucursal 
    console.log(resultado +1 )
    return resultado
  }
/*     models.Clientes.sequelize.query(`ALTER SEQUENCE clientes_id_seq RESTART WITH ${id};`)
 */    /* models.Clientes.destroy(id)
    models.Clientes.sequelize.query(`DELETE FROM clientes_id WHERE ${cliente.id}`) */
const create = async (body) => {
    const newSucursal = await models.Sucursales.create(body)
    return newSucursal  
}

const update = async (id, changes) => {
  const sucursal = await findOne(id)
  const updatedSucursal = await sucursal.update(changes)

  return updatedSucursal
}

const remove = async (id) => {
  const sucursal = await findOne(id)
  await sucursal.destroy(id)
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
  findByCodigo,
  create,
  update,
  remove,
  removeByName
}