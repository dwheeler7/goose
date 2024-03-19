const Notification = require('../../models/Notification')
const User = require('../../models/User')

// Controller to get all notifications for a user
exports.emitNotification = async (_, res, next) => {
    try {
        console.log('testing emit notification')
        // set notification type        
        const localNotification = res.locals.data.notification                
        const foundFromUser = await User.findOne({ _id: localNotification.fromUser })        

        // create notification
        const notification = await Notification.create({
            type: localNotification.type,
            fromUser: foundFromUser._id,
            toUser: localNotification.toUser,
            post: localNotification.post
        })        
        if (!notification) throw new Error('could not create notification')                
        await User.findByIdAndUpdate(localNotification.toUser, { $push: { notifications: notification._id } });
        next()
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ toUser: req.user._id }).populate('post').populate('fromUser').exec()            
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
