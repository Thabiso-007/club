const jwt = require('jsonwebtoken')

const { secret_key } = require('../config/env')

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || ""
    try {
        const verified = jwt.verify(token, secret_key)
        req.verifiedUser =  verified
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { authenticate }