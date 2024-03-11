const Post = require('../../models/post')
const User = require('../../models/user')

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonPost,
    jsonPosts,
    likePost,
    unlikePost
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
        // grabing the id from the req body
        const { _id: userId } = req.body 
        const post = await Post.create(req.body)
        console.log(post)

        // Updating user's post array
        await User.findByIdAndUpdate( userId, { $push: { posts: post._id} })

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

        // Remove post from user's posts array
        await User.updateOne({ posts: req.params.id }, { $pull: { posts: req.params.id } })
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Like Post
async function likePost(req, res, next) {
    try {
        const postId = req.params.id
        const userId = req.user.id
        const post = await Post.findById(postId)

        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        // Check if the user has already liked the post
        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: 'Post already liked by the user' })
        }

        // Add user's ID to the likes array of the post
        post.likes.push(userId)
        await post.save()
    } catch (error) {
        console.error("Error liking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

async function unlikePost(req, res, next) {
    try {
        const postId = req.params.id
        const userId = req.user.id
        const post = await Post.findById(postId)

        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        // Check if the user has already liked the post
        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: 'Post already liked by the user' })
        }

        // Remove user's ID from the likes array of the post
        post.likes = post.likes.filter(like => like !== userId)
        await post.save()
    } catch (error) {
        console.error("Error liking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}