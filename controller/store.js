var express = require('express');
var router = express.Router();
const Store = require('../models/store');
const methods = {}

methods.create = function(req,res,next){
  let newStore = new Store({
    name : req.body.name,
    description : req.body.description,
    phone : req.body.phone,
    catagory : req.body.catagory,
    floor : req.body.floor
  })

  newStore.save(function(err){
    if(err) res.send(err)
    res.send('New store has been successfully created')
  })
}

module.exports = methods
