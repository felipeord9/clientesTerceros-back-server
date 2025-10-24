const { models } = require("../libs/sequelize");
const boom = require('@hapi/boom')

const find = () => {
    const Estudios = models.Estudio.findAll()
    return Estudios
};

const findOne = async (id) => {
    const Estudio = await models.Estudio.findByPk(id)
  
    if(!Estudio) throw boom.notFound('Estudio no encontrado')
  
    return Estudio
}

const findBypk = async (id) => {
    const Estudio = await models.Estudio.findAll({
        where:{
            empleadoId: id
        }
    })
  
    if(!Estudio) throw boom.notFound('Estudio no encontrado')
  
    return Estudio
}

const create = async(body) => {
    const newEstudio = await models.Estudio.create(body)
    return newEstudio    
}

const update = async (id, changes) => {
    const Estudio = await findOne(id)
    const updatedEstudio = await Estudio.update(changes)
  
    return updatedEstudio
}

const remove = async(id)=>{
    const estudio = findOne(id)
    ;(await estudio).destroy(id)
}

const suprimir = async(id) => {
    const estudios = await models.Estudio.destroy({
        where: { id: id } 
    })
    return estudios
}

module.exports={
    find,
    findOne,
    findBypk,
    create,
    findOne,
    update,
    remove,
    suprimir,
}