var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var db;
const bodyParser = require('body-parser')

MongoClient.connect('mongodb://localhost:27017/myblog', function (err, client) {
    if (err) throw err
    db = client.db('ims')
})

router.get("/set",function (req,res) {
    res.cookie('name','tiger',{maxAge:500000, httpOnly: true});
    res.send("设置cookie成功");
});

router.get('/', function (req, res) {
    console.log("admin_root")
    if(req.cookies.name !== "tiger"){
        res.redirect('/admin/login')
    }
    else{
        // 传递的是一个对象，使用时直接访问对象内容
        var data = {};
        const collection = db.collection('papers');
        collection.find({"paper":"none"}).toArray(function (err, result) {
            if (err) throw err
            // console.log(result)
            data.result = result;
            res.render('admin',{data:data})
        })
    }

})

router.get('/insert', function (req, res) {
    const collection = db.collection('papers');
    // collection.insertMany([{a:1}]);
    res.render('insert');
})

router.get('/login', function (req, res) {
    res.render('login');
})

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false}))

router.post("/login_in",function(req,res){
    console.log(JSON.stringify(req.body));
    if(req.body.name === "li"&&req.body.password === "111111"){
        res.cookie("name",'tiger',{maxAge: 900000, httpOnly: true});
        res.redirect('/admin');
    }
    else{
        res.render('login',{message:"error"});
    }
    res.end("hello");
})

module.exports = router;
