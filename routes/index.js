var express = require('express');
var router = express.Router();
var userController = require('../controllers/authController')
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('use /login or /auth/facebook/login for authenticate and access data with /api');
});

//login-local

router.post('/login',passport.authenticate('didit-login'), userController.login);

router.post('/register', userController.register);

//login-facebook
router.get('/auth/facebook/login', passport.authenticate('facebook', {scope: 'email'}))

router.use('/auth/facebook/callback', passport.authenticate('facebook'), userController.loginFacebook)

router.get('/auth/login/failed', function (req, res) {
  res.send('error')
})

module.exports = router;
