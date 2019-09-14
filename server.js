// Import packages
var sql = require('mysql');
var express = require('express');
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

app.get('/', function (req, res) {
    res.render('home');
});

