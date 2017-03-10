`use strict`
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user')
const hash = require('password-hash')
require('dotenv').config()


module.exports = function (passport) {

  passport.serializeUser(function(user, callback){
    callback(null, user)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })

  //------------------------LocalStrategy----------------------------------------------
  passport.use('didit-login', new LocalStrategy(function(usernameInput, password, cb){

    User.findOne({ 'local.username': usernameInput }, function(err, data){
      if (!data) {
        cb(null, false)
      }else{
        if (hash.verify(password, data.local.password)) {
          cb(null, data)
        }else{
          cb(null, false)
        }
      }

    })

  }))
  //-------------------------END-------------------------------------------------------

//------------------------Facebook Strategy----------------------------------------------
passport.use(new FacebookStrategy({
  clientID: process.env.facebookClientID,
  clientSecret: process.env.facebookClientSecret,
  callbackURL: process.env.facebookCallbackURL,
  profileFields: ['id', 'emails', 'name']
},
function (token, refreshToken, profile, done) {
  process.nextTick(function () {
    User.findOne({ 'facebook.id': profile.id }, function (err, user) {
      console.log(profile);
      if (err) return done(err)
      if (user) { return done(null, user) } else {
        User.create({
          'facebook.id' : profile.id,
          'facebook.token' : token,
          // 'facebook.name' : profile.displayName
          'facebook.givenName' : profile.name.givenName,
          'facebook.middleName' : profile.name.middleName,
          'facebook.familyName' : profile.name.familyName,
        }, function(err,data){
          if(err) throw err;
          return done(null, data)
        })
      }
    })
  })
}
))

}
