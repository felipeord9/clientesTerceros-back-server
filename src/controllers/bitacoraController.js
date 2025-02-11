const BitacoraService = require("../services/bitacoraService");
const getmac = require('getmac');
const getMAC =require ('getmac')
var address = require('address');
const os = require('os');

const findAllBitacoras = async(req,res,next)=>{
  try{
      const data=await BitacoraService.find()

      res.status(200).json({
          message:'OK',
          data
      })
  } catch(error){
      console.log(error)
      next(error)
  }
}

const findOneBitacora = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await BitacoraService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const getDireccionMac = async (req,res,addr)=>{
  address.mac('vboxnet', function (err, addr){
    address.mac(addr) 
  })
}

const createBitacora = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    
    /* const direccion = address.mac(function (err, addr) {
      addr; 
    }) */
    
    const data = await BitacoraService.create({
        usuario:body.usuario,
        accion:body.accion,
        fechaIngreso:body.fechaIngreso,
        fechaSalida:body.fechaSalida,
        macEquipo:address.mac(function (err, addr) {
          return(addr);
        })
    })
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateBitacora = async (req, res, next) => {
  try {
    const { params: { email }, body } = req
    const data = await BitacoraService.update(email, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteBitacora = async (req, res, next) => {
  try {
    const { params: { email }} = req
    const data = await BitacoraService.remove(email)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllBitacoras,
  findOneBitacora,
  createBitacora,
  updateBitacora,
  deleteBitacora,
  getDireccionMac
};