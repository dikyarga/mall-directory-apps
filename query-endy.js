// NOTE
// ambil data API dengan npm axios,
// looping 1 per 1 data, lalu masukkan ke dalam collection store
//
// mongoose.connect di app.js di comment sementara, karena beda lokasi localhost

// require yang diperlukan
var express = require('express');
let axios = require('axios');
let faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mall');

// inisiasi nama models ke variabel Store
let Store = require('./models/store');

// Insert data dari API ke store colection
axios.get('http://udin.us/spotpunch/api/stores')
    .then(function (response) {
        for (var i = 0; i < 5; i++) {
            let dataStore = new Store({
                dataId: response.data.data[i].id,
                name: response.data.data[i].name,
                phone: faker.phone.phoneNumberFormat(),
                catagory: faker.commerce.department(),
                floor: response.data.data[i].floor_id,
            });

            dataStore.save(function (err, res) {
                if (err) return console.error(err);
                console.log(`data berhasil dimasukkan`);
            });
        }
    })
