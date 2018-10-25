module.exports = function (app) {
    // app.get('/', function (req, res) {
    //     // res.redirect('/posts')
    //     res.render('index')
    // })
    app.get('/secbit', function (req, res) {
        // res.redirect('/posts')
        res.render('secbit')
    })


    app.use('/message', require('./message'))

    app.use('/signup', require('./signup'))
    app.use('/signin', require('./signin'))
    app.use('/signout', require('./signout'))
    app.use('/posts', require('./posts'))
    app.use('/comments', require('./comments'))
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}