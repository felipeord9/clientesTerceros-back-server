const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const cookie = require('cookie');

const MailService = require('./mailService')
const UserService = require('./userService')
const { config } = require('../config/config')
const { response } = require('express')

const getUser = async (email, password) => {
  const user = await UserService.findByEmail(email)

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) throw boom.unauthorized()

  delete user.dataValues.password
  return user
}

const signToken = (user) => {
  const payload = {
    sub: user.id,
    role: user.role,
  }
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' })
  const cookieConfig = cookie.serialize('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 3600, // Tiempo de vida de la cookie en segundos
    path: '/' // Ruta donde la cookie estará disponible
  });
  return {
    user, token
  }
}

const changePassword = async (id, currentPassword, newPassword) => {
  const user = await UserService.findOne(id)

  const isMatch = bcrypt.compareSync(currentPassword, user.password)

  if(!isMatch) throw boom.unauthorized()

  const hash = bcrypt.hashSync(newPassword, 10)

  const updatedUser = await user.update({ password: hash })
  delete updatedUser.dataValues.password
  return updatedUser
}

const sendRecovery = async (email) => {
  try{

    const user = await UserService.findByEmail(email)
  
    if (!user) throw boom.unauthorized()
  
    const payload = { sub: user.id }
    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: '15min'
    })
    const mail = {
      /* from: 'Clientes@granlangostino.net', */
      from: 'oficialdecumplimiento@granlangostino.com',
      to: user.email,
      subject: 'Recuperación de contraseña',
      html: `<b>Ingresa a este link para reestablecer tu contraseña: ${config.recoveryUrl}/${token}</b>`
    }
  
    const rta = await MailService.sendEmails(mail)
    await UserService.update(user.id, { recoveryToken: token })
    return rta
  }catch (error) {
    console.error('Error al solicitar recuperación de contraseña:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

const changeRecoveryPassword = async (token, newPassword) => {
  try {
    console.log(token)
    const payload = jwt.verify(token, config.jwtSecret)
    const user = await UserService.findOne(payload.sub)

    if (user.recoveryToken !== token) throw boom.unauthorized()

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await UserService.update(user.id, {
      password: hashedPassword,
      recoveryToken: null
    })
    return { message: 'Password changed' }
  } catch (error) {
    throw boom.unauthorized()
  }
}

/* const sendMail = async (infoMail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.smtpEmail,
      pass: config.smtpPassword
    }
  })
  await transporter.sendMail(infoMail)
  return { message: 'Mail sent' }
} */

module.exports = {
  getUser,
  signToken,
  changePassword,
  sendRecovery,
  changeRecoveryPassword,
  
  //sendMail
}
