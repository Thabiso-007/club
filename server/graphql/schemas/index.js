const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql')

const { ClubType, LeagueType } = require('../types') 
const Club = require('../../models/ClubModel')
const League = require('../../models/LeagueModel')

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

/** Admin section */

// Get all clubs
const countries = {
    name: "Countries",
    type: new GraphQLList(LeagueType),
    resolve: async (parent, args) => {
        const countries = await League.find()
        return countries
    }
}

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs,
        singleclub,
        countries
    }
})

module.exports = RootQuery