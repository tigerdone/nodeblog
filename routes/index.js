const express = require('express')
const path = require('path')
const poster = require('./poster')

const router = express.Router();

router.get('/', function (req, res) {
    //自动访问index.html
    // app.use(express.static(path.join(__dirname, 'public')))
    res.render('index')
})
router.get('/secbit', function (req, res) {
    //自动访问secbit/index.html
    router.use(express.static(path.join(__dirname, 'public/secbit')))
})
router.get('/tigerdone', function (req, res) {
    //tigerdone/index.html
    router.use(express.static(path.join(__dirname, 'public/tigerdone')))
})

router.get('/pdf', function (req, res) {
    res.download(path.join(__dirname, '../public/pdf/CV_QinWu_November6_2018.pdf'));
})

router.post('/my_test', function (req, res) {
    res.header(
        // 'Access-Control-Allow-Origin','*'
    )
    // res.send("hello");



    res.json(JSON.stringify({data:['data','dsssoc', 'message', 'success']}))
})


module.exports = router;