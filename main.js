var express = require('express');
var app = express();
var userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('Example App is listening on port 3000');
});