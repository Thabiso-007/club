const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const { ClubType } = require('../types')
const Club = require('../../models/ClubModel')

// Add a club
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

// Delete a club
const deleteClub = {
    name: "deleteClub",
    type: ClubType,
    args: { id: { type: GraphQLID }},
    resolve: async (parent, args) => {
        const removeClub = await Club.findByIdAndDelete(args.id)
        return removeClub
    }
}

// Update a club
const updateClub = {
    name: "updateClub",
    type: ClubType,
    args: { id: { type: GraphQLID }, name: { type: GraphQLString }, league: { type:GraphQLString }},
    resolve: async (parent, args) => {
        const update = await Club.findByIdAndUpdate(args.id,{
            name: args.name,
            league: args.league
        })
        return update
    }
}
// 1:11:01
const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: { 
        addClub,
        deleteClub,
        updateClub
    }
})

module.exports = RootMutation 