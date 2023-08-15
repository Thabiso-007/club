const { GraphQLString } = require('graphql')

const User = require('../../models/UserModel')
const { UserType } = require('../types')
const { createJwtToken } = require('../../utils/auth')

// Register
const register = {
    name: "register",
    type: UserType,
    args: {
        username: { type:GraphQLString },
        email: { type:GraphQLString },
        password: { type:GraphQLString },
        displayName: { type:GraphQLString }
    },
    resolve: async (parent, args) => {
        const { username, email, password, displayName } = args
        const user = new User({ username, email, password, displayName })
        // 1:19:08
        await user.save()
        const token = createJwtToken(user)
        return JSON.stringify(token)
    }
}

module.exports = { register }
