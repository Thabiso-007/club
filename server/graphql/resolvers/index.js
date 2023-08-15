const { GraphQLObjectType } = require('graphql')

const { addCountry, updateCountry, deleteCountry } = require('./league')
const { addClub, deleteClub, updateClub } = require('./club')
const { register } = require('./admin')

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: { 
        addClub,
        deleteClub,
        updateClub,
        addCountry,
        updateCountry,
        deleteCountry,
        register
    }
})

module.exports = RootMutation 