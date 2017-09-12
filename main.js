var express = require('express');
var app = express();
var userRouter = require('./routes/user');

var myLogger = function (req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next();
};

app.use(myLogger);

app.get('/', function (req, res) {
    res.send("Hello World!");
})

app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('Example App is listening on port 3000');
});