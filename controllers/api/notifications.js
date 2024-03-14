const Notification = require('../models/notification.model')

// Controller to get all notifications for a user
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user._id }).populate('post').exec()
        res.json(notifications)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// Controller to mark notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id)
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' })
        }
        notification.read = true
        await notification.save()
        res.json({ message: 'Notification marked as read' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
