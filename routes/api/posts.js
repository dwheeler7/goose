const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/posts')
const githubAPIService = require('../../services/githubAPI')

// create
router.post('/', postCtrl.create)

// index
router.get('/', postCtrl.index)

// show
router.get('/:id', postCtrl.show)

// update
router.put('/:id', postCtrl.update)

// delete
router.delete('/:id', postCtrl.destroy)

// Like a post
router.post('/:id/like', postCtrl.likePost)
// Unlike a post
router.post('/:id/unlike', postCtrl.unlikePost)

module.exports = router