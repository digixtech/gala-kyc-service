`use strict`

const glob = require('glob')

export const plugin = {
  name: 'router',
  version: '1.0.0',
  register: (server, options) => {
    const files = glob.sync('./**/*.route.js', {
      absolute: true
    })

    /* Inject Routing */
    files.map((file) => {
      server.route(require(file))
    })
  }
}
