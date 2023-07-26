const { GraphQLObjectType, GraphQLString } = require('graphql')

const { ClubType } = require('../types')
const Club = require('../../models/ClubModel')

const addClub = {
    name: "addClub",
    type: ClubType,
    args: { name: { type: GraphQLString }, league: { type:GraphQLString }},
    resolve: async (parent, args) => {
        const club = new Club({ name: args.name, league: args.league })
        const newClub = await club.save()
        return newClub
    }
}

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: { 
        addClub
    }
})

module.exports = RootMutation 