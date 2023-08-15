const { GraphQLObjectType } = require('graphql')

const { clubs, singleclub } = require('./club')
const { countries } = require('./leagues')
const { allPlayer } = require('./players')
const { users } = require('./admin')

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs,
        singleclub,
        countries,
        allPlayer,
        users
    }
})

module.exports = RootQuery