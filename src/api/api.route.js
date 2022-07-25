`use strict`

const API = require('./api.controller')

const routes = [
  {
    method: 'POST',
    path: '/api/v1/kyc/verify-token',
    config: API.verifyToken
  },
  {
    method: 'POST',
    path: '/api/v1/kyc/verify-identity',
    config: API.verifyIdentity
  }
]

module.exports =  routes
