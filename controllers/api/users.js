const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

const checkToken = (req, res) => {
    console.log('req.user', req.user);
    res.json(req.exp);
};

const dataController = {
    async createUser(req, res, next) { 
        try {
            const user = await User.create(req.body);
            console.log(req.body);
            const token = createJWT(user);
            res.locals.data = { user, token };
            next();
        } catch (e) {
            console.log('Database problem occurred', e);
            res.status(400).json(e);
        }
    }, 
    async loginUser(req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) throw new Error('User not found');
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) throw new Error('Invalid password');
            const token = createJWT(user);
            res.locals.data = { user, token };
            next();
        } catch (error) {
            console.error('Login error', error);
            res.status(400).json({ message: error.message || 'Bad Credentials' });
        }
    }, 
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedUser);
        } catch (error) {
            console.error('Error updating user', error);
            res.status(400).json({ message: 'Error updating user' });
        }
    } 
};

const apiController = {
    authenticate(req, res) {
        res.json(res.locals.data.token);
    }
};

module.exports = {
    checkToken,
    dataController,
    apiController
};