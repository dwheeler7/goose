const Comment = require('../../models/Comment');
const User = require('../../models/User');

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonComment,
    jsonComments
};

function jsonComment(req, res) {
    res.json(res.locals.data.comment);
}

function jsonComments(req, res) {
    res.json(res.locals.data.comments);
}

// Create a new comment
async function create(req, res, next) {
    try {
        const { _id: userId } = req.body;
        const comment = await Comment.create(req.body);

        // Update user's comments array
        await User.findByIdAndUpdate(userId, { $push: { comments: comment._id } });

        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
}

// Get all comments
async function index(req, res, next) {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        next(error);
    }
}

// Get a specific comment by ID
async function show(req, res, next) {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        next(error);
    }
}

// Update a specific comment by ID
async function update(req, res, next) {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        next(error);
    }
}

// Delete a specific comment by ID
async function destroy(req, res, next) {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Remove comment from user's comments array
        await User.updateOne({ comments: req.params.id }, { $pull: { comments: req.params.id } });

        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        next(error);
    }
}
