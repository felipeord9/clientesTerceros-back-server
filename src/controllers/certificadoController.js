const CertificadoService = require("../services/certificadoService");
const AuthService = require('../services/authService')
const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');
const fsExtra = require('fs-extra');
const nodemailer = require('nodemailer');

const findAllCertificados = async (req, res, next) => {
  try {
    const data = await CertificadoService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const { params: { tercero } } = req;
    const data = await CertificadoService.findAll(tercero);

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneCertificado = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await CertificadoService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const findByTercero = async (req,res,next)=>{
  try{
    const{params:{tercero}}=req;
    const data = await CertificadoService.findByTercero(tercero);
    res.status(200).json({
      message:'OK',
      data
    })
  } catch(error){
    next(error)
  }
}

const createCertificado = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await CertificadoService.create(body)
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateCertificado = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await CertificadoService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const sendCertifi = async (req,res,next)=>{
  try{
    const { body } = req
    const data = await CertificadoService.sendCertificado(body)
    res.status(200).json(data)
  }catch(error){
    next(error)
  }
}

const certiRetefuente = async (req,res,next)=>{
  try{
    const { body } = req
    const data = await CertificadoService.certificadoRfte(body)
    res.status(200).json(data)
  }catch(error){
    next(error)
  }
}

const sendCertifiIva = async (req, res, next)=>{
  try{
      const { body } = req
      const data = await CertificadoService.sendCertificadoIva(body)
      res.status(200).json(data)
  }catch(error){
    next(error)
  }
}

module.exports = {
  findAllCertificados,
  findOneCertificado,
  findAll,
  createCertificado,
  updateCertificado,
  findByTercero,
  sendCertifi,
  sendCertifiIva,
  certiRetefuente

};