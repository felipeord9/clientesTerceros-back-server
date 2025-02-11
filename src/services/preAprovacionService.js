const { models } = require("../libs/sequelize");

const find=()=>{
    const PreAprovacion = models.PreAprovacion.findAll()
    return PreAprovacion
};
const findOne = async (id) => {
    const PreAprovacion = await models.PreAprovacion.findByPk(id)
  
    if(!PreAprovacion) throw boom.notFound('PreAprovacion no encontrado')
  
    return PreAprovacion
}
const findByCedula = async (cedula) => {
    const PreAprovacion = await models.PreAprovacion.findOne({
     where: {cedula }
  })
  
    if(!PreAprovacion) throw boom.notFound('PreAprovacion no encontrado')
  
    return PreAprovacion
  }

const create = async(body)=>{
    const newPreAprovacion = await models.PreAprovacion.create(body)
    return newPreAprovacion   
}

const update = async (id, changes) => {
    const PreAprovacion = await findOne(id)
    const updatedPreAprovacion = await PreAprovacion.update(changes)
  
    return updatedPreAprovacion
}

const validarPreAprovacion = async (cedula)=>{
    const PreAprovacion = await models.PreAprovacion.findOne({
        where:{cedula:cedula}
    })
    if(!PreAprovacion) throw boom.notFound('PreAprovacion no encontrado')
    return PreAprovacion
}

const remove = async(id)=>{
    const PreAprovacion = findOne(id)
    ;(await PreAprovacion).destroy(id)
}

const removeByCedula = async(cedula)=>{
    const PreAprovacion = await findByCedula(cedula)
    await PreAprovacion.destroy(cedula)
    return cedula
}

module.exports={
    find,
    create,
    findOne,
    remove,
    validarPreAprovacion,
    update,
    removeByCedula,
    findByCedula,
}