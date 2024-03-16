const Post = require('../../models/Post')
const User = require('../../models/User')
const { fetchReadmeContent } = require('../../services/githubAPI')

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
    res.json(res.locals.data.post);
}

function jsonPosts(_, res) {
    res.json(res.locals.data.posts);
}

// Create
async function create(req, res) {
    try {
        // Save user ID to req.body.user
        // req.body.user = req.user._id;
        const userId = req.user._id

        // Grabbing the id from the req body
        const { githublink, useReadmeAsDescription } = req.body;
        let description = req.body.description; // Initialize description with the provided description

        // If GitHub link is provided and user wants to use README content as description
        if (githublink && useReadmeAsDescription) {
            // Extract owner and repo name from the GitHub link
            const [_, owner, repo] = githublink.split('/');
            // Fetch README content from GitHub repository
            const readmeContent = await fetchReadmeContent(owner, repo);
            description = readmeContent; // Update description with README content
        }

        // Create post with the updated description
        const post = await Post.create({ user: userId, ...req.body, description });        
        // Update user's post array
        // const foundUser = await User.findOne({ _id: userId })
        const foundUser = await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });
        res.locals.data.post = post;
        res.locals.data.user = foundUser;        
        res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(400).json({ msg: error.message });
    }
}

// Read
async function index(_, res) {
    try {
        const posts = await Post.find();
        res.locals.data.posts = posts;
        console.log("Retrieved posts:", posts);
        res.json(posts);
    } catch (error) {
        console.error("Error retrieving posts:", error);
        res.status(400).json({ msg: error.message });
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.locals.data.post = post;
        console.log("Retrieved post:", post);
        res.json(post);
    } catch (error) {
        console.error("Error retrieving post:", error);
        res.status(400).json({ msg: error.message });
    }
}

// Update
async function update(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.locals.data.post = post;
        console.log("Updated post:", post);
        res.json(post);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(400).json({ msg: error.message });
    }
}

// Delete
async function destroy(req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        // Remove post from user's posts array
        await User.updateOne({ posts: req.params.id }, { $pull: { posts: req.params.id } });
        res.locals.data.post = post;
        console.log("Deleted post:", post);
        res.json(post);
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(400).json({ msg: error.message });
    }
}

// Like Post
async function likePost(req, res) {
    try {
        const userId = req.user._id
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        // Add post to likedPosts array of the user if not already present
        if (!req.user.likedPosts.includes(post._id)) {
            req.user.likedPosts.push(post._id)            
        } else {
            throw new Error('Post already liked by the user')
        }
        // Add user to likes array of the post if not already present
        if (!post.likes.includes(userId)) {
            post.likes.push(userId)
            await post.save()
        }
        res.locals.data.post = post
        console.log("Post liked:", post);
        res.json(post);
    } catch (error) {
        console.error("Error liking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

// Unlike Post
async function unlikePost(req, res) {
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
        // Remove user from likes array of the post
        post.likes = post.likes.filter(like => like.toString() !== req.user._id.toString())
        await post.save()
        res.locals.data.post = post
        console.log("Post unliked:", post);
        res.json(post);
    } catch (error) {
        console.error("Error unliking post:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}
