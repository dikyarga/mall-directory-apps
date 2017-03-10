var express = require('express');
var router = express.Router();
const Store = require('../models/store');
const methods = {}

methods.create = function (req, res, next) {
    let newStore = new Store({
        dataId: req.body.dataId,
        name: req.body.name,
        phone: req.body.phone,
        catagory: req.body.catagory,
        floor: req.body.floor
    })

    newStore.save(function (err) {
        if (err) res.send(err)
        res.send('New store has been successfully created')
    })

}

methods.show = function (req, res, next) {
    Store.find({}, function (err, result) {
        if (err) res.status(500)
            .send(err);
        res.send(result)
    })
};

methods.showbyId = function (req, res, next) {
    Store.findById(req.params.id, function (err, result) {
        if (err) res.status(500)
            .send("store id is not found");
        res.send(result)
    })
};

methods.update = function (req, res, next) {
    Store.findById(req.params.id, function (err, store) {
        if (err) {
            res.status(500)
                .send("store id is not found")
        } else {
            store.name = req.body.name || store.name
            store.phone = req.body.phone || store.phone
            store.floor = req.body.floor || store.floor
            store.catagory = req.body.catagory || store.catagory

            store.save(function (err) {
                if (err) res.send(err);
                res.send('Data has been successfully updated')
            })
        }
    })
};

methods.remove = function (req, res, next) {
    Store.findByIdAndRemove(req.params.Id, function (err) {
        if (err) res.status(500)
            .send("store Id is not found");
        res.send('Data has been successfully removed from database')
    })
};

methods.findByName = function (req, res, next) {
    Store.find({
            'name': {
                $regex: req.body.name,
                $options: "i"
            },
            'mall': {
                $regex: req.body.mall,
                $options: "i"
            }
        })
        .then(function (result) {
            res.send(result)
            console.log(result);
        })
}

methods.findByCategory = function (req, res, next) {
    Store.find({
            'catagory': {
                $regex: req.body.catagory,
                $options: "i"
            },
            'mall': {
                $regex: req.body.mall,
                $options: "i"
            }
        })
        .then(function (result) {
            res.send(result)
        })
}

methods.findByFloor = function (req, res, next) {
    Store.find({
            'floor': req.body.floor,
            'mall': {
                $regex: req.body.mall,
                $options: "i"
            }
        })
        .then(function (result) {
            res.send(result)
        })
}

module.exports = methods
