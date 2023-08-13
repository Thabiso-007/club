const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club"
    },
    players: [{
       player: {
            type: String
        },
       number: {
            type: String
        }
    }]
}, { timestamps: true })

const Player = mongoose.model('Player', playerSchema)
module.exports = Player