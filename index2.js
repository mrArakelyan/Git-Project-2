var express = require('express')

var app = express();

app.get('/', function (req, res) {
    res.send('Ok from my dummy server')
})

app.listen(3000);