const Post = require('../../models/Post');
const User = require('../../models/User');
const { fetchReadmeContent } = require('../../services/githubAPI');

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
};

function jsonPost(_, res) {
    res.json(res.locals.data.post);
}

function jsonPosts(_, res) {
    res.json(res.locals.data.posts);
}

// Create
async function create(req, res, next) {
    try {
        const userId = req.user._id;
        const { githubLink, useReadmeAsDescription, projectDescription } = req.body;

        let description = projectDescription; // Initialize with provided projectDescription
        // If GitHub link is provided and user wants to use README content as description
        console.log(githubLink, useReadmeAsDescription)
        if (githubLink && useReadmeAsDescription) {
            // Extract owner and repo name from the GitHub link
            console.log('working')
            const [_, owner, repo] = githubLink.split('/');
            // Fetch README content from GitHub repository
            const readmeContent = await fetchReadmeContent(owner, repo);
            req.body.projectDescription = readmeContent; // Update projectDescription with README content
        }
        
        const post = await Post.create({ user: userId, ...req.body, description });
        const foundUser = await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });
        res.locals.data.post = post;
        next();
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Failed to create post" });
    }
}

// Read
async function index(_, res) {
    try {
        const posts = await Post.find({}).populate("likes");
        res.locals.data.posts = posts;
        console.log("Retrieved posts:", posts);
        res.json(posts);
    } catch (error) {
        console.error("Error retrieving posts:", error);
        res.status(500).json({ message: "Failed to retrieve posts" });
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
        res.status(404).json({ message: "Post not found" });
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
        res.status(500).json({ message: "Failed to update post" });
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
        res.status(500).json({ message: "Failed to delete post" });
    }
}

// Like Post
async function likePost(req, res, next) {
    try {
        const userId = req.user._id
        const foundUser = await User.findOne({ _id: userId })
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        // Add post to likedPosts array of the user if not already present
        if (!foundUser.likedPosts.includes(post._id)) {
            foundUser.likedPosts.push(post._id)
            await foundUser.save()
        } else {
            throw new Error('Post already liked by the user')
        }
        // Add user to likes array of the post if not already present
        if (!post.likes.includes(userId)) {
            post.likes.push(userId)
            await post.save()
        }
        res.locals.data.post = post;
        res.locals.data.notification = {
            type: 'like',
            fromUser: userId,
            toUser: post.user,
            post: post._id
        };
        next();
    } catch (error) {
        console.error("Error liking post:", error)
        res.status(500).json({ message: "Failed to like post" })
    }
}

// Unlike Post
async function unlikePost(req, res) {
    try {
        const user = await User.findOne({ _id: req.user._id });
        const post = await Post.findOne({ _id: req.params.id });

        // Remove post from user's likedPosts array
        const likedPostIdx = user.likedPosts.indexOf(post._id);
        user.likedPosts.splice(likedPostIdx, 1);
        await user.save();

        // Remove user from post's likes array
        const postLikesIdx = post.likes.indexOf(user._id);
        post.likes.splice(postLikesIdx, 1);
        await post.save();

        res.json({ post, user });
    } catch (error) {
        console.error("Error unliking post:", error);
        res.status(500).json({ message: "Failed to unlike post" });
    }
}
