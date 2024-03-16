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
    async showUser(req, res, next) {
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
    },
    async resetPassword(req, res) {
        try {
            // Implement password reset logic here
            // For example, generate a temporary password, send it to the user's email, and update the password in the database
            // You can use libraries like nodemailer to send emails
            
            // Placeholder implementation: generate a random password
            const temporaryPassword = Math.random().toString(36).slice(-8); // Generate an 8-character temporary password
            
            // Update the user's password in the database with the temporary password
            const user = await User.findOneAndUpdate(
                { email: req.body.email }, // Find the user by their email
                { password: temporaryPassword }, // Update the password
                { new: true } // Return the updated user object
            );

            // You can also send an email to the user with the temporary password here
            
            res.status(200).json({ message: 'Password reset successful. Check your email for the temporary password.' });
        } catch (error) {
            console.error('Error resetting password', error);
            res.status(400).json({ message: 'Error resetting password' });
        }
    } 

    }, 

    async followDeveloper(req, res) {
        try {
            const { userId, developerId } = req.body;
            const user = await User.findByIdAndUpdate(userId, { $addToSet: { followedDevelopers: developerId } }, { new: true });
            const developer = await User.findByIdAndUpdate(developerId, { $addToSet: { usersThatFollowThisDeveloper: userId } }, { new: true });
            res.json({ user, developer });
        } catch (error) {
            console.error('Error following developer', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async unfollowDeveloper(req, res) {
        try {
            const { userId, developerId } = req.body;
            const user = await User.findByIdAndUpdate(userId, { $pull: { followedDevelopers: developerId } }, { new: true });
            const developer = await User.findByIdAndUpdate(developerId, { $pull: { usersThatFollowThisDeveloper: userId } }, { new: true });
            res.json({ user, developer });
        } catch (error) {
            console.error('Error unfollowing developer', error);
            res.status(500).json({ message: 'Internal server error' });
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
