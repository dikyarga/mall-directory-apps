const mongoose = require('mongoose');

let storeSchema = mongoose.Schema({
  name : String,
  description: String,
  phone : String,
  catagory : String,
  floor : String
},{
  timestamps : true
})

let store = mongoose.model('Store', storeSchema)

module.exports = store
