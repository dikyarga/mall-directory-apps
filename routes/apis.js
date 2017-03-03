const express = require('express');
const router = express.Router();
const Store = require('../controllers/store')
//
router.get('/stores', Store.show)
router.get('/store/:id', Store.showbyId)
router.post('/store', Store.create)
router.put('/store/:id', Store.update)
router.delete('/store/:id', Store.remove)
router.get('/store/search/name/:name', Store.findByName)
router.get('/store/search/category/:catagory', Store.findByCategory)
router.get('/store/search/floor/:floor', Store.findByFloor)

module.exports = router;
