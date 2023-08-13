const { GraphQLString, GraphQLID } = require('graphql')

const { PlayerType } = require('../types')
const Player = require('../../models/PlayerModel')

// Add a club
const addPlayer = {
    name: "addClub",
    type: PlayerType,
    args: { 
        name: { type: GraphQLString }, 
        players: { 
            type:GraphQLString 
        }
    },
    resolve: async (parent, args) => {
        const club = new Player({ name: args.name, league: args.league })
        const newClub = await club.save()
        return newClub
    }
}

// Delete a club
const deletePlayer = {
    name: "deletePlayer",
    type: PlayerType,
    args: { id: { type: GraphQLID }},
    resolve: async (parent, args) => {
        const removeClub = await Player.findByIdAndDelete(args.id)
        return removeClub
    }
}

// Update a club
const updatePlayer = {
    name: "updatePlayer",
    type: PlayerType,
    args: { id: { type: GraphQLID }, name: { type: GraphQLString }, league: { type:GraphQLString }},
    resolve: async (parent, args) => {
        const update = await Player.findByIdAndUpdate(args.id,{
            name: args.name,
            league: args.league
        })
        return update
    }
}

module.exports = {
    deletePlayer,
    updatePlayer,
    addPlayer
}