const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/api/comments');

// Create a new comment
router.post('/', commentController.create);

// Get all comments
router.get('/', commentController.index);

// Get a specific comment
router.get('/:id', commentController.show);

// Update a comment
router.put('/:id', commentController.update);

// Delete a comment
router.delete('/:id', commentController.destroy);

module.exports = router;
