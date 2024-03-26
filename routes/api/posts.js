const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/posts')
const notificationsCtrl = require('../../controllers/api/notifications')
const checkToken = require('../../config/checkToken')

// create
router.post('/', checkToken, postCtrl.create, postCtrl.jsonPost)

// index
router.get('/', postCtrl.index)

// index for a user
router.get('/user/:userId', postCtrl.indexByUser)

// show
router.get('/:id', postCtrl.show)

// update
router.put('/:id', postCtrl.update)

// delete
router.delete('/:id', postCtrl.destroy)

// Like a post
router.post('/:id/like', postCtrl.likePost, notificationsCtrl.emitNotification, postCtrl.jsonPost)

// Unlike a post
router.post('/:id/unlike', postCtrl.unlikePost)

module.exports = router 