const express = require('express')
const router = express.Router()
const {dataContoller, apiController} =require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Import User model
const User = require('../../models/User')

// Post /api/users
router.post('/', dataController.createUser, apiController.authenticate)

// Post /api/users/login
router.post('/login', dataContoller.loginUser, apiController.authenticate)

// Get /api/users/check-token
router.get('/check-token', ensureLoggedIn, (req, res) => {
    res.status(200).json({message: 'Token is valid'})
})

// Put /api/users/:id
router.put('/:id', ensureLoggedIn, dataContoller.updateUser)

module.exports = router