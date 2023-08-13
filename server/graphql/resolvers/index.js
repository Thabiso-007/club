const { GraphQLObjectType } = require('graphql')

const { addCountry, updateCountry, deleteCountry } = require('./league')
const { addClub, deleteClub, updateClub } = require('./club')

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: { 
        addClub,
        deleteClub,
        updateClub,
        addCountry,
        updateCountry,
        deleteCountry
    }
})

module.exports = RootMutation 