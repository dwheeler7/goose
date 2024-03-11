const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    githublink: {type: String, required: true },
    content: { type: String, required: true }
    // likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // lets add likes and update models in one push
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post