const mongoose = require('mongoose');

let storeSchema = mongoose.Schema({
  dataId : Number,
  name : String,
  phone : String,
  catagory : String,
  floor : String
},{
  timestamps : true
})

let store = mongoose.model('Store', storeSchema)

module.exports = store
