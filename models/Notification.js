const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    type: { type: String, enum: ['like', 'comment'], required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    read: { type: Boolean, default: false }
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification