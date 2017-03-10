var mongoose = require('mongoose');
var Schema = mongoose.Schema

var newUser = new Schema({
  local:{
    username: String,
    password: String,
    email: String
  },
  facebook:{
    id: String,
    token: String,
    email: String,
    givenName: String,
    middleName: String,
    familyName: String,
  }
})

var User = mongoose.model('User', newUser)

module.exports = User
