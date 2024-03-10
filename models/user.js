const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const GOLDEN_EGGS = 12

const userSchema = new Schema({
    name: {type: String, required: true},
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
    picture: {type: String},
    userType: { type: String, enum: ['developer', 'employer'], required: true }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, GOLDEN_EGGS)
    return next()
})

module.exports = mongoose.model('User', userSchema) 
