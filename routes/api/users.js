const express = require('express');
const router = express.Router();
const { dataController, apiController } = require('../../controllers/api/users'); 
const ensureLoggedIn = require('../../config/ensureLoggedIn'); 

// Import User model
const User = require('../../models/User');

// GET /api/users/:id
router.get('/:id', dataController.showUser, apiController.authenticate);

// POST /api/users
router.post('/', dataController.createUser, apiController.authenticate);

// POST /api/users/login
router.post('/login', dataController.loginUser, apiController.authenticate);

// willy's reset route 
router.post('/reset-password', dataController.resetPassword);
router.put('/reset-password/:token', dataController.updatePasswordWithToken);
//Email Support router 
router.post('/support', dataController.handleSupportTicket);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});

// PUT /api/users/:id
router.put('/:id', ensureLoggedIn, dataController.updateUser, dataController.updatePasswordWithToken);



// POST /api/users/follow
router.post('/follow', ensureLoggedIn, dataController.followDeveloper);

// POST /api/users/unfollow
router.post('/unfollow', ensureLoggedIn, dataController.unfollowDeveloper);


module.exports = router;
