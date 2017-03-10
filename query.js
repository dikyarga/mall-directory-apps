const fs = require('fs');
let express = require('express');
let axios = require('axios');
let faker = require('faker');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mallapps');
const Store = require('./models/store');

// list data mall
let mallList = ["Aeon", "Bintaro Jaya Xchange", "Central Park", "Emporium", "Gandaria City", "Grand Indonesia",
    "Kota Kasablanka", "Plaza Indonesia", "Plaza Senayan", "Pluit Village", "Senayan City", "Taman Anggrek"
];

// list data catagory
let categoryList = ["Jewelery", "Beauty", "Automotive", "Baby", "Finance", "Health", "Toys", "Computers", "Books",
    "Outdoors", "Clothing", "Home", "Music", "Sports", "Garden", "Grocery"
];

let data = JSON.parse(fs.readFileSync("./data/stores.json", "utf-8"));

for (let i = 0; i < data.length; i++) {
    let dataStore = new Store({
        dataId: i,
        name: data[i].name,
        floor: data[i].floor_id,
        phone: faker.phone.phoneNumberFormat(),
        catagory: faker.random.arrayElement(categoryList),
        mall: faker.random.arrayElement(mallList)
    });

    dataStore.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`data berhasil dimasukkan`);
    });
}

// list data mall
// "Aeon",
// "Bintaro Jaya Xchange",
// "Central Park",
// "Emporium",
// "Gandaria City",
// "Grand Indonesia",
// "Kota Kasablanka",
// "Plaza Indonesia",
// "Plaza Senayan",
// "Pluit Village",
// "Senayan City",
// "Taman Anggrek"


// // list data catagory
// "Jewelery",
// "Beauty",
// "Automotive",
// "Baby",
// "Finance",
// "Health",
// "Toys",
// "Computers",
// "Books",
// "Outdoors",
// "Clothing",
// "Home",
// "Music",
// "Sports",
// "Garden",
// "Grocery"
