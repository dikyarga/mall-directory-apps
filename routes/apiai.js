const express = require('express');
const router = express.Router();
const ApiaiController = require('../controllers/apiaiController')

router.post('/webhook', ApiaiController.webhook)

module.exports = router;
