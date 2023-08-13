const {  GraphQLList, GraphQLID } = require('graphql')

const League = require('../../models/LeagueModel')
const { LeagueType } = require('../types') 

// Get all clubs
const countries = {
    name: "Countries",
    type: new GraphQLList(LeagueType),
    args: {id: {type: GraphQLID}},
    resolve: async (parent, args) => {
        const countries = await League.find()
        return countries
    }
}

module.exports = {
    countries
}