const { GraphQLList, GraphQLID } = require('graphql')

const User = require('../../models/UserModel')
const { UserType } = require('../types')

// Users 
const users = {
    name: "Users",
    type: new GraphQLList(UserType),
    args: {id: { type: GraphQLID }},
    resolve: (parent, args) => {
        return User.find() 
    }
}

module.exports = { users }