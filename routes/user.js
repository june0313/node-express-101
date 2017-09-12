var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res) {
    res.send('Hello world' + req.params.id);
});

router.post('/', function (req, res) {
    res.json({ success: true });
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