// Import packages
var sql = require('mysql');
// Password reference ###
var pass = require('./pw');


// Build connection to local SQL database
var connection = sql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : pass,
    database : 'burgers_db'
  });

// Export
module.exports = connection;