const express = require('express');
const router = express.Router();
const Store = require('../controllers/store')
const Auth = require('../controllers/authController')
//
router.get('/stores',Auth.verify, Store.show)
router.get('/store/:id',Auth.verify, Store.showbyId)
router.post('/store',Auth.verify, Store.create)
router.put('/store/:id',Auth.verify, Store.update)
router.delete('/store/:id',Auth.verify, Store.remove)
router.get('/store/search/name/:name',Auth.verify, Store.findByName)
router.get('/store/search/category/:catagory',Auth.verify, Store.findByCategory)
router.get('/store/search/floor/:floor',Auth.verify, Store.findByFloor)

module.exports = router;
