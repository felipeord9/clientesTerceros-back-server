const AuthService = require('../services/authService')
const cookie = require('cookie');

const login = async (req, res, next) => {
  try {
    const { user } = req
    delete user.dataValues.recoveryToken
    res.status(200).json(AuthService.signToken(user))
    //const data = AuthService.signToken(user)
    //res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const changePassword = async (req, res, next) => {
  try {
    const {user, body} = req
    const data = await AuthService.changePassword(user.sub, body.currentPassword, body.newPassword)

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const compararPassword=async(realPassword,currentPassword)=>{
  const esValida = await bcrypt.compare(realPassword,currentPassword);
  if(!esValida){
    return res.status(401).json({ mensaje: 'Contraseña actual incorrecta' });
  }
}

const sendRecovery = async (req, res, next) => {
  try {
    const { email } = req.body
    const data = await AuthService.sendRecovery(email)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const changeRecoveryPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body
    const data = await AuthService.changeRecoveryPassword(token, newPassword)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  changePassword,
  sendRecovery,
  changeRecoveryPassword,
  compararPassword
}
