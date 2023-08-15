const jwt = require('jsonwebtoken')

const { secret_key, jwt_expires } = require('../config/env')

const createJwtToken = (user) => {
    return jwt.sign({ user: user }, secret_key, {
        expiresIn: jwt_expires
    })
}

module.exports = { createJwtToken }