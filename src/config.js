const vision = require('vision')
const inert = require('inert')
const { Constants } = require('./constants')
const HapiSwagger = require('hapi-swagger')

import route from './route'
import hapiAuth from 'hapi-auth-jwt2'

const swaggerOpts = {
  info: {
    title: 'KYC API Documentation',
    version: '1'
  },
  documentationPath: '/api/kyc/documentation',
  jsonPath: '/api/kyc/swagger.json',
  swaggerUIPath: '/api/kyc/swaggerui/',
  grouping: 'tags'
}

export const server = {
  connection: {
    host: Constants.HOST || '0.0.0.0',
    port: Constants.PORT || 3001,
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
        additionalHeaders: [
          'Access-Control-Allow-Origin',
          'Access-Control-Request-Method',
          'Access-Control-Allow-Methods',
          'language',
          'channel',
          'X-kycais-signature',
          'X-kycais-nonce'
        ]
      }
    }
  },
  registers: [
    vision,
    inert,
    route,
    hapiAuth,
    {
      plugin: HapiSwagger,
      options: swaggerOpts
    },
    require('susie')
  ]
}
