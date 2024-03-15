const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
function createJWT(user, rememberMe) {
    let expiresIn = '24h'; // Default expiration time (24 hours)
    if (rememberMe) {
        expiresIn = '30d'; // 30 days expiration if rememberMe is true
    }
    const jwtToken = jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn }
    );
    console.log(jwtToken)
    return jwtToken
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
            const token = createJWT(user, false); // Default expiration
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
            console.log('Request body:', req.body); // Log entire request body
            console.log('Remember Me from frontend:', req.body.rememberMe); // Log the value of rememberMe
            if (!user) throw new Error('User not found');
            const match = await bcryptjs.compare(req.body.password, user.password);
            if (!match) throw new Error('Invalid password');

            // Assuming "rememberMe" is sent in the request body
            const token = createJWT(user, req.body.rememberMe);
            res.locals.data = { user, token };
            next();
        } catch (error) {
            console.error('Login error', error);
            res.status(400).json({ message: error.message || 'Bad Credentials' });
        }
    }, 
    async showUser(req, res) {
        try {
            const user = await User.findById(req.params.id)
            res.locals.data.user = user
            next()
        } catch (error) {
            res.status(400).json({ msg: error.message })
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