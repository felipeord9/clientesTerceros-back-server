const { models } = require("../libs/sequelize");

const create = async(body)=>{
    const newAprobacion = await models.Rechazados.create(body)
    return newAprobacion    
}

module.exports={
    create,
}