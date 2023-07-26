const { GraphQLObjectType, GraphQLList } = require('graphql')
const { ClubType } = require('../types') 
const Club = require('../../models/ClubModel')

const clubs = {
    name: "Clubs",
    type: new GraphQLList(ClubType),
    resolve: async (parent, args) => {
         const club = Club.find()
        return club
    }
}

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs
    }
})

// 55:39

module.exports = RootQuery