const RegimenService = require('../services/regimenService')

const findAllRegimen = async (req, res, next) => {
  try {
    const data = await RegimenService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllRegimen
}