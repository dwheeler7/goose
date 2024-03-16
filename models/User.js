const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const GOLDEN_EGGS = 12;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        trim: true,
        minlength: 8,
        required: true
    },
    picture: { type: String },
  
    userType: { type: String, enum: ['developer', 'employer'], required: true, default: 'developer' },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // Fixed typo here
    likes: [{ type: Schema.Types.ObjectId, ref: 'Post' }], //i added likes to user
    likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }], //added notification
    followedDevelopers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    usersThatFollowThisDeveloper: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcryptjs.hash(this.password, GOLDEN_EGGS);
    return next();
});

module.exports = mongoose.model('User', userSchema);
