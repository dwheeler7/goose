const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    githubLink: { type: String },
    content: { type: String, required: true },
    projectTitle: { type: String, required: true },
    projectDescription: { type: String },
    image: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
