const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club"
    },
    players: [{
        type: String,
    }]
})

const Club = mongoose.model('Club', clubSchema)
module.exports = Club