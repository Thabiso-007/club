const {  GraphQLList, GraphQLID } = require('graphql')

const Player = require('../../models/PlayerModel')
const { PlayerType } = require('../types') 

// Get all players
const allPlayer = {
    name: "Players",
    type: new GraphQLList(PlayerType),
    args: {id: {type: GraphQLID}},
    resolve: async (parent, args) => {
        const players = await Player.find()
        return players
    }
}

module.exports = {
    allPlayer
}