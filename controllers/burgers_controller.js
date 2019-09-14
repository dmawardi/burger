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
    burger.create(newBurger).then(function(){
        // Send to user 200 (OK) status that operation completed
        res.sendStatus(200);

    }).catch(function(err){
        // Alert the user the request has failed
        res.sendStatus(500);
    });
});

// Update burger as devoured
router.put('/api/burgers/:id', function(req, res){
    // Grab parameter id from URL
    var idToDevour = req.params.id;
    // Devour burger using id
    burger.devour(idToDevour).then(function(){
        // Send to user 200 (OK) status that operation completed
        res.sendStatus(200);

    }).catch(function(err){
        // Alert the user the request has failed
        res.sendStatus(500);
    });;
});


module.exports = router;