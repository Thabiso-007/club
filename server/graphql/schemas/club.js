const {  GraphQLList, GraphQLID } = require('graphql')

const Club = require('../../models/ClubModel')

const { ClubType } = require('../types')

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

module.exports = {
    clubs,
    singleclub
}