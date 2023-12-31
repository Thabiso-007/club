const { GraphQLString, GraphQLID, GraphQLObjectType } = require('graphql')

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
    }) 
})

module.exports = { 
    ClubType,
    LeagueType,
    PlayerType 
}