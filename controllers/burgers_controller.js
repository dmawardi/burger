var express = require('express');
var router = express.Router();
var burger = require('../models/burger');
var exphbs = require('express-handlebars');

// Home Page route
router.get('/', function(req, res){
    burger.select().then(function(response){
        console.log(response);
        res.render('index', {burgers: response})
    });
});

// Create new burger
router.post('/api/burgers', function(req, res){
    let newBurger = req.body.burger_name;
    burger.create(newBurger);
});

// Update burger as devoured
router.put('/api/burgers/:id', function(req, res){
    var idToDevour = req.params.id;
    burger.devour(idToDevour);
});


module.exports = router;