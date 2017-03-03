const express = require('express');
const router = express.Router();
const Store = require('../controllers/store')
//
router.get('/stores', Store.show)
router.get('/store/:id', Store.showbyId)
router.post('/store', Store.create)
router.put('/store/:id', Store.update)
router.delete('/store/:id', Store.remove)

module.exports = router;
