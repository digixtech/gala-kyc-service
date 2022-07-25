const Joi = require('joi')

const verifyToken = {
  validate: {
    options: {
      allowUnknown: true
    },
    payload: {
      token: Joi.string()
        .required()
    }
  }
}

const verifyIdentity = {
  validate: {
    options: {
      allowUnknown: true
    },
    payload: {
      birthDate: Joi.string()
        .allow('', null)
    }
  }
}

module.exports =  {
  verifyToken,
  verifyIdentity
}