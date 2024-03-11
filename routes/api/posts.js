const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/posts')

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

module.exports = router