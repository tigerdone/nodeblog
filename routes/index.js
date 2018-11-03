const express = require('express')
const path = require('path')
const poster = require('./poster')


module.exports = function (app) {
    // app.get('/', function (req, res) {
    //     // res.redirect('/posts')
    //     res.render('index')
    // })
    app.get('/', function (req, res) {
        app.use(express.static(path.join(__dirname, 'public')))
    })
    app.get('/secbit', function (req, res) {
        app.use(express.static(path.join(__dirname, 'public/secbit')))
    })
    app.get('/tigerdone', function (req, res) {
        app.use(express.static(path.join(__dirname, 'public/tigerdone')))
    })

    app.get('/pdf', function (req, res) {
        res.download(path.join(__dirname, '../public/pdf/CV_QinWu_October_2018.pdf'));
    })

    poster(app)


    // app.use('/message', require('./message'))
    // app.use('/signup', require('./signup'))
    // app.use('/signin', require('./signin'))
    // app.use('/signout', require('./signout'))
    // app.use('/posts', require('./posts'))
    // app.use('/comments', require('./comments'))

    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}