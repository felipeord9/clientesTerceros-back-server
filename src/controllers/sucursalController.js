const SucursalService = require("../services/sucursalService");

const findAllSucursales = async (req, res, next) => {
  try {
    const data = await SucursalService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneSucursal = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await SucursalService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const findCodigo = async (req, res, next)=>{
    try {
        const { params: { cedula } } = req;
        const data = await SucursalService.findByCodigo(cedula);
    
        res.status(200).json({
          message: 'OK',
          data,
        });
      } catch (error) {
        next(error)
      }
}

const createSucursal = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await SucursalService.create(body)
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateSucursal = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await SucursalService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteSucursal = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await SucursalService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteByName = async (req, res, next) => {
  try {
    const { params: { name }} = req
    const data = await SucursalService.removeByName(name)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
} 

module.exports = {
  findAllSucursales,
  findOneSucursal,
  findCodigo,
  createSucursal,
  updateSucursal,
  deleteSucursal,
  deleteByName,
};

/* const data = await SucursalService.create({
      cedula:body.cedula,
      codigoSucursal:body.codigoSucursal,
      nombreSucursal:body.nombreSucursal,
      direccion:body.direccion,
      ciudad:body.ciudad,
      celular:body.celular,
      correoFacturaElectronica:body.correoFacturaElectronica,
      nombreContacto:body.nombreContacto,
      celularContacto:body.celularContacto,
      correoContacto:body.correoContacto,
      createdAt:body.createdAt,
      userName:body.userName,
    }) */