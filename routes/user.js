var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res) {
    res.send('Hello world' + req.params.id);
});

router.post('/', function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));

    res.json({ 
        success: true,
        user: req.body.username
    });
});

router.put('/', function (req, res) {
    res
        .status(400)
        .json({ message: 'hey, you. Bad Request!!!' });
});

router.delete('/', function (req, res) {
    res.send("Recived a DELETE request");
});

module.exports = router; 