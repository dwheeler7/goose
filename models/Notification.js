const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    type: { type: String, enum: ['like', 'comment', 'follow'], required: true},
    fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    
    toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    read: { type: Boolean, default: false }
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification