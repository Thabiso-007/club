const { GraphQLString, GraphQLID, GraphQLObjectType } = require('graphql')

const User = require('../models/UserModel')

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString }
    })
})

const ClubType = new GraphQLObjectType({
    name: "ClubType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        league: { type: GraphQLString }
    })
})

const PlayerType = new GraphQLObjectType({
    name: "PlayerType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        players: { type: GraphQLString }
    })
})

const LeagueType = new GraphQLObjectType({
    name: "LeagueType",
    fields: () => ({
        id: { type: GraphQLID },
        country: { type: GraphQLString },
        league: { type: GraphQLString },
        admin: {
            type: UserType,
            resolve: (parent, args) => {
                return User.findById(parent.adminId)
            }
        }
    }) 
})

module.exports = { 
    ClubType,
    LeagueType,
    UserType,
    PlayerType 
}