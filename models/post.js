const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    githublink: {type: String },
    description: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post