const express = require('express');
const router = express.Router();
const Store = require('../controller/store')
//
router.get('/stores', Store.show)
router.get('/store/:id', Store.showbyId)
router.post('/store', Store.create)
// router.put('/store/:id')
// router.delete('/store/:id')

module.exports = router;
