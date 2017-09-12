var express = require('express');
var app = express();
var userRouter = require('./routes/user');

var morgan = require('morgan');
var bodyParser = require('body-parser');

// var myLogger = function (req, res, next) {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);
app.use(morgan('dev'));
app.use(bodyParser.json());

// 같은 경로에 대해서는 먼저 작성한 코드가 우선권을 갖는다.
app.use('/', express.static('public'));

app.get('/', function (req, res) {
    res.send("Hello World!");
})

app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('Example App is listening on port 3000');
});