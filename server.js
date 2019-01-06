var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use('/store', function(req, res, next) {
    console.log('Jestem posrednikiem do /store');
    next();
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.listen(3000);

app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie moglismy odnalezc tego, czego zadasz!');
});