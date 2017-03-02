const express = require('express');
const router = express.Router();

router.get('/stores')
router.get('/store/:id')
router.post('/store')
router.put('/store/:id')
router.delete('/store/:id')

module.exports = router;
