const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const { ClubType, LeagueType } = require('../types')
const Club = require('../../models/ClubModel')
const League = require('../../models/LeagueModel')

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

/** Admin section */

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