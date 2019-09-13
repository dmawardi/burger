var sql = require('mysql');
var pass = require('./pw');



var connection = sql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : pass,
    database : 'burgers_db'
  });

  module.exports = connection;