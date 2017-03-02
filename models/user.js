const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    dataId: Number,
    email: String,
    password: String
}, {
    timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = store
