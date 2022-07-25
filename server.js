'use strict'

const Hapi = require('hapi')
const Config = require('./src/config')
const Constants = require('./src/constants')
const { Logger, Auth } = require('@digixtech_gala/gala-common-sdk')

const server = new Hapi.Server(Config.server.connection)

server.events.on('response', function(request) {
  Logger.hapiApi(request, { showResponse: false })
})

const start = async () => {
  try {
    await server.register(Config.server.registers)
    await server.start()

    server.auth.strategy('jwt', 'jwt', {
      key: Constants.JWT.SECRET_KEY,
      validate: Auth.validate
    })
    server.auth.default('jwt')

    Logger.info(`Server is running at ${server.info.uri}`)
  } catch (error) {
    Logger.error('Server error')
    Logger.error(error)
  }
}

start()

module.exports = server
