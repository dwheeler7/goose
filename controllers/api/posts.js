const Post = require('../../models/post')

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonPost,
    jsonPosts
}

function jsonPost(_, res) {
    res.json(res.locals.data.post)
}

function jsonPosts(_, res) {
    res.json(res.locals.data.posts)
}

// Create
async function create(req, res, next) {
    try {
        const post = await Post.create(req.body)
        console.log(post)
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Read
async function index(_, res, next) {
    try {
        const posts = await Post.find()
        res.locals.data.posts = posts
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Update
async function update(req,res, next) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Delete
async function destroy(req, res, next) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}