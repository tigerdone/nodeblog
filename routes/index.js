const express = require('express')
const path = require('path')
const poster = require('./poster')


var MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017/myblog', function (err, client) {
    if (err) throw err
    db = client.db('ims')

})


module.exports = function (app) {
    // app.get('/', function (req, res) {
    //     // res.redirect('/posts')
    //     res.render('index')
    // })

    app.get('/', function (req, res) {
        // app.use(express.static(path.join(__dirname, 'public')))
        res.render('index')

    })

    app.get('/secbit', function (req, res) {
        app.use(express.static(path.join(__dirname, 'public/secbit')))
    })
    app.get('/tigerdone', function (req, res) {
        app.use(express.static(path.join(__dirname, 'public/tigerdone')))
    })

    app.get('/pdf', function (req, res) {
        res.download(path.join(__dirname, '../public/pdf/CV_QinWu_November6 2018.pdf'));
    })

    poster(app)


    app.get('/db_test', function (req, res) {
        // 传递的是一个对象，使用时直接访问对象内容
        var data = {};
        const collection = db.collection('papers');
        collection.find({"paper":"none"}).toArray(function (err, result) {
            if (err) throw err
            // console.log(result)
            data.result = result;
            res.render('ejstest',data)
        })
    })

    app.get('/insert', function (req, res) {
        const collection = db.collection('papers');
        collection.insertMany([{a:1}]);
        res.render('admin')
    })

    app.get('/insert', function (req,res) {

    })
    
    
}