const express = require('express');
const router = express.Router();
const notificationController = require('../../controllers/api/notifications');

// Get all notifications for a user
router.get('/', notificationController.getNotifications);

// Mark notification as read
router.patch('/:id/read', notificationController.markAsRead);

module.exports = router;