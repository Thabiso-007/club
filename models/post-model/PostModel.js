const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    body: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    },
    comment: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post