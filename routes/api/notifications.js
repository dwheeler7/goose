const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notifications');

// Get all notifications for a user
router.get('/notifications', notificationController.getNotifications);

// Mark notification as read
router.patch('/notifications/:id/read', notificationController.markAsRead);

module.exports = router;
