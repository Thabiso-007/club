const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club"
    }
}, { timestamps: true })

const  Club = mongoose.model('Club', clubSchema)
module.exports = Club