const express = require('express');
const router = express.Router();
const Store = require('../controller/store')

router.get('/stores',Store.create)
router.get('/store/:id')
router.post('/store')
router.put('/store/:id')
router.delete('/store/:id')

module.exports = router;
