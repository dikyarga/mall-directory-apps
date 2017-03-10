const express = require('express');
const router = express.Router();
const Store = require('../controllers/store')
const Auth = require('../controllers/authController')

router.get('/stores', Auth.verify, Store.show)
router.get('/store/:id', Auth.verify, Store.showbyId)
router.post('/store', Auth.verify, Store.create)
router.put('/store/:id', Auth.verify, Store.update)
router.delete('/store/:id', Auth.verify, Store.remove)
router.post('/store/search/name', Auth.verify, Store.findByName)
router.post('/store/search/category', Auth.verify, Store.findByCategory)
router.post('/store/search/floor', Auth.verify, Store.findByFloor)


module.exports = router;
