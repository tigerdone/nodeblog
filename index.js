const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const pkg = require('./package')
const winston = require('winston')
const expressWinston = require('express-winston')
const cookieParser = require('cookie-parser');
const app = express()

const indexRouter = require('./routes/index')
const admin = require('./routes/admin')

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
//设置cookie 中间件
app.use(cookieParser());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 设置模板全局常量
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
}


// 路由
app.use('/',indexRouter);
app.use('/admin',admin);

app.use(function (err, req, res, next) {
    console.error(err)
    res.redirect('/')
})


// 监听端口，启动程序
if (module.parent) {
    // 被 require，则导出 app
    module.exports = app
} else {
    // 监听端口，启动程序
    app.listen(config.port, function () {
        console.log(`${pkg.name} listening on port ${config.port}`)
    })
}