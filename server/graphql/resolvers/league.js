const { GraphQLString, GraphQLID } = require('graphql')

const { LeagueType } = require('../types')
const League = require('../../models/LeagueModel')

// Add a country
const addCountry = {
    name: "addCountry",
    type: LeagueType,
    args: { country: { type: GraphQLString }, league: { type:GraphQLString }},
    resolve: async (parent, args) => {
        const country = new League({ country: args.country, league: args.league })
        const newCountry = await country.save()
        return newCountry
    }
}

// Update a country
const updateCountry = {
    name: "updateCountry",
    type: LeagueType,
    args: { id: { type: GraphQLID }, country: { type: GraphQLString }, league: { type:GraphQLString }},
    resolve: async (parent, args) => {
        const update = await League.findByIdAndUpdate(args.id,{
            country: args.country,
            league: args.league
        })
        return update
    }
}

// Delete a club
const deleteCountry = {
    name: "deleteCountry",
    type: LeagueType,
    args: { id: { type: GraphQLID }},
    resolve: async (parent, args) => {
        const removeCountry = await League.findByIdAndDelete(args.id)
        return removeCountry
    }
}

module.exports = {
    addCountry,
    updateCountry,
    deleteCountry
}