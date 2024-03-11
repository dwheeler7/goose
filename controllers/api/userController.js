const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
    console.log('req.user', req.user)
    res.json(req.exp)
}

const dataController = {
    async createUser(req, res, next) { 
        try {
            const user = await User.create(req.body)
            console.log(req.body)
            const token = createJWT(user)
            res.locals.data.user = user
            res.locals.data.token = token
            next()
        } catch (e) {
            console.log('Database problem occurred', e)
            res.status(400).json(e)
        }
    }, 
    async loginUser(req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) throw new Error()
            const match = await bcrypt.compare(req.body.password, user.password)
            if (!match) throw new Error()
            res.locals.data.user = user
            res.locals.data.token = createJWT(user)
            next()
        } catch {
            res.status(400).json('Bad Credentials')
        }
    }, 
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(updatedUser)
        } catch (error) {
            console.error('Error updating user', error)
            res.status(400).json({ message: 'Error updating user' })
        }
    } 
}

const apiController = {
    authenticate(req, res) {
        res.json(res.locals.data.token)
    }
}

module.exports = {
    checkToken,
    dataController,
    apiController
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}
