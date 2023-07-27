const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql')
const { ClubType } = require('../types') 
const Club = require('../../models/ClubModel')

// Get all clubs
const clubs = {
    name: "Clubs",
    type: new GraphQLList(ClubType),
    resolve: async (parent, args) => {
        const clubs = await Club.find()
        return clubs
    }
}

// Get a single club
const singleclub = {
    name: "singleClub",
    type: ClubType,
    args: {id: {type: GraphQLID}},
    resolve: async (parent, args) => {
        const club = await Club.findById(args.id)
        return club
    }
}

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs,
        singleclub
    }
})

module.exports = RootQuery