const { models } = require("../libs/sequelize");

const create = async(body)=>{
    const newAprobacion = await models.Aprobados.create(body)
    return newAprobacion    
}

module.exports={
    create,
}