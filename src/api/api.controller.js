const _ = require('underscore')
const Boom = require('boom')
const JWT = require('jsonwebtoken')
const { Logger, GenerateUtils } = require('@digixtech_gala/gala-common-sdk')
const Validation = require('./api.validation')
const Constants = require('../constants')

const verifyToken = {
  auth: false,
  ...Validation.verifyToken,
  handler: async request => {
    try {
      const { token } = request.payload
      const galaToken = JWT.sign(
        { checkKycLogId, idCard, transactionId },
        Constants.JWT.SECRET_KEY,
        { expiresIn: Constants.JWT.TOKEN_EXPIRE }
      )
      const randomNumber = GenerateUtils.randomAll(2, 2)
      return {
        resultCode: 200,
        resultMessage: 'Success',
        data: {
          galaToken,
          token,
          key: randomNumber
        }
      }
    } catch (error) {
      Logger.error(error)
      return Boom.badImplementation()
    }
  }
}

const verifyIdentity = {
  ...Validation.verifyIdentity,
  handler: async request => {
    try {
      const { idCard: rawIdCard } = request.auth.credentials
      const { birthDate } = request.payload
      return {
        resultCode: 200,
        resultMessage: 'Success',
        data: {
          idCard: rawIdCard,
          birthDate
        }
      }
    } catch (error) {
      Logger.error(error)
      return Boom.badImplementation()
    }
  }
}

module.exports =  {
  verifyToken,
  verifyIdentity
}
