var connection = require('./connection');
// var sql = require('mysql');

function selectAll() {
    let query = 'SELECT * FROM burgers';
    connection.query(query, function(err, res) {
        console.log(res);
    });

}

function insertOne(burgerName) {
    let query = 'INSERT INTO burgers (burger_name) VALUES ?';
    connection.query(query, [burgerName], function(err, res) {
        console.log(res);
    });

}

function updateOne() {
    let query = 'UPDATE burgers SET burger_name = ? WHERE id = ?';
    connection.query(query,
        [
            'Balooga Burger', 4
        ], function(err, res) {
        console.log(res);
    });

}

// updateOne();
// insertOne('Fire Burger');
// selectAll();

module.exports.ORM = {
    updateOne: updateOne(),
    selectAll: selectAll(),
    insertOne: insertOne()
}