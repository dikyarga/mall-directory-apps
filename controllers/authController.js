var User = require('../models/user')
var hash = require('password-hash')
var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  login: function(req, res, next) {
    var token = jwt.sign({ username: req.body.username }, process.env.SECRET, { expiresIn: '1d' });
    res.send({ token: token })
  },

  loginFacebook: function(req, res, next) {
    console.log(res.req.user.facebook.email);
    var token = jwt.sign({ email: res.req.user.facebook.email }, process.env.SECRET, { expiresIn: '1d' });
    // res.send({ token: token })
    res.redirect(`http://localhost/mallapp/home?token=${token}`)
  },

  register: function(req, res, next) {
    User.create({
      'local.username': req.body.username,
      'local.password': hash.generate(req.body.password),
      'local.email': req.body.email
    }, function(err,data){
      if(err) throw err;
      res.json(data)
    })
  },

  verify: function(req, res, next){
    if (req.headers.token == 'null') {
      res.json("you don't have access")
    }else{
      if (jwt.verify(req.headers.token, process.env.SECRET)) {
        next()
      }else {
        res.json("token was expried")
      }
    }
  }
}
