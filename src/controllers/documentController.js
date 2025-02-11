const DocumentService = require('../services/documentService')

const findAllDocuments = async (req, res, next) => {
  try {
    const data = await DocumentService.find()
    
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllDocuments
}