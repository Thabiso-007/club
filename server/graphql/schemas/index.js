const { GraphQLObjectType } = require('graphql')

const { clubs, singleclub } = require('./club')
const { countries } = require('./leagues')
const { allPlayer } = require('./players')

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs,
        singleclub,
        countries,
        allPlayer,
    }
})

module.exports = RootQuery