`use strict`

const Constants = {
  PORT: process.env.PORT,
  JWT: {
    SECRET_KEY: process.env.JWT_SECRET_KEY,
    TOKEN_EXPIRE: process.env.TOKEN_EXPIRE,
    REFRESH_TOKEN_EXPIRE: process.env.REFRESH_TOKEN_EXPIRE
  }
}

module.exports =  {
  Constants
}
