const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    }
}, { timestamps: true })

const League = mongoose.model('Country', leagueSchema)
module.exports = League