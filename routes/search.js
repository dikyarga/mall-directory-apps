var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('name/:paramsName', function (req, res, next) {
    // bagian routing untuk pencarian di store collection berdasarkan nama
});

router.get('catagory/:paramsName', function (req, res, next) {
    // bagian routing untuk pencarian di store collection berdasarkan catagory
});

module.exports = router;
