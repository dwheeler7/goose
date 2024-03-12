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
        const userId = req.user._id
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        // Add post to likedPosts array of the user if not already present
        if (!req.user.likedPosts.includes(post._id)) {
            req.user.likedPosts.push(post._id)
            await req.user.save()
        } else {
            throw new Error('Post already liked by the user')
        }

        // Add user to likes array of the post if not already present
        if (!post.likes.includes(userId)) {
            post.likes.push(userId)
            await post.save()
        }

        res.locals.data.post = post
        next()
    } catch (error) {
        console.error("Error liking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

// Unlike Post
async function unlikePost(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        // Check if the post ID is present in the likedPosts array of the user
        if (!req.user.likedPosts.includes(post._id)) {
            throw new Error('Post is not liked by the user')
        }

        // Check if the user ID is present in the likes array of the post
        if (!post.likes.includes(req.user._id)) {
            throw new Error('User has not liked the post')
        }

        // Remove post from likedPosts array of the user
        req.user.likedPosts = req.user.likedPosts.filter(likedPostId => likedPostId.toString() !== post._id.toString())
        await req.user.save()

        // Remove user from likes array of the post
        post.likes = post.likes.filter(like => like.toString() !== req.user._id.toString())
        await post.save()

        res.locals.data.post = post
        next()
    } catch (error) {
        console.error("Error unliking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}