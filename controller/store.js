var express = require('express');
var router = express.Router();
const Store = require('../models/store');
const methods = {}

methods.create = function(req,res,next){
  let newStore = new Store({
    dataId : req.body.dataId,
    name : req.body.name,
    phone : req.body.phone,
    catagory : req.body.catagory,
    floor : req.body.floor
  })

  newStore.save(function(err){
    if(err) res.send(err)
    res.send('New store has been successfully created')
  })

}

methods.show = function(req, res, next){
  Store.find({},function(err,result){
    if(err) res.status(500).send(err);
    res.send(result)
  })
};

methods.showbyId = function(req, res, next){
  Store.findById(req.params.id,function(err,result){
    if(err) res.status(500).send("store id is not found");
    res.send(result)
  })
};


module.exports = methods
