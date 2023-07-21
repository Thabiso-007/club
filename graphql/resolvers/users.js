const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const User = require('../../models/user-model/UserModel')
const { secret_key } = require('../../config/env/index')

module.exports = {
    Mutation: {
        async register(
            _,
            {username, email, password, confirmPassword}
        ) {
            // TODO Validate user data
            // Make sure user doesn't re-register
            const user = User.findOne({ username })
            if (user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken.'
                    }
                })
            }
            // Hash password and create an auth token
            password = await bcrypt.hash(password, 12)

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            })
            const res = await newUser.save()

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, secret_key, { expiresIn: '1h'})

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}

// 55:23