var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'https://22cbcec3.ngrok.io'
var should = chai.should();
chai.use(chaiHttp);

describe('Store', function () {
    // Search by name
    it('POST search by name', function (done) {
        chai.request(server)
            .post('/api/store/search/name')
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODkxMjkwMzYsImV4cCI6MTQ4OTIxNTQzNn0.t9ZnT6HljKr_YRJVpB4bIfBZFyyTx_4P9IBoFlqAm0w")
            .send({
                name: "Krispy Kreme",
                mall: "aeon"
            })
            .end(function (err, res) {
                // console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('dataId');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('floor');
                res.body[0].should.have.property('phone');
                res.body[0].should.have.property('category');
                res.body[0].should.have.property('mall');
                done();
            });
    });
    // Search by category
    it('POST search by category', function (done) {
        chai.request(server)
            .post('/api/store/search/category')
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODkxMjkwMzYsImV4cCI6MTQ4OTIxNTQzNn0.t9ZnT6HljKr_YRJVpB4bIfBZFyyTx_4P9IBoFlqAm0w")
            .send({
                category: "Toys",
                mall: "bintaro"
            })
            .end(function (err, res) {
              // console.log(res.body);
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('dataId');
              res.body[0].should.have.property('name');
              res.body[0].should.have.property('floor');
              res.body[0].should.have.property('phone');
              res.body[0].should.have.property('category');
              res.body[0].should.have.property('mall');
              done();
            });
    });
    // Search by floor
    it('POST search by floor', function (done) {
        chai.request(server)
            .post('/api/store/search/floor')
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODkxMjkwMzYsImV4cCI6MTQ4OTIxNTQzNn0.t9ZnT6HljKr_YRJVpB4bIfBZFyyTx_4P9IBoFlqAm0w")
            .send({
                floor: 1,
                mall: "bintaro"
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('dataId');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('floor');
                res.body[0].should.have.property('phone');
                res.body[0].should.have.property('category');
                res.body[0].should.have.property('mall');
                done();
            });
    });
    // Search all floor in mall
    it('POST search all floor in mall', function () {
        chai.request(server)
            .post('/api/store/mall/floor')
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODkxMjkwMzYsImV4cCI6MTQ4OTIxNTQzNn0.t9ZnT6HljKr_YRJVpB4bIfBZFyyTx_4P9IBoFlqAm0w")
            .send({
                mall: "bintaro"
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
