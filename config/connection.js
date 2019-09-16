// Import packages
var sql = require('mysql');

// If JAWS DB detected, connecto to it
if (process.env.JAWSDB_URL) {
  connection = sql.createConnection(process.env.JAWSDB_URL);

  // Else, Build connection to local SQL database
} else {
  var connection = sql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'HackAway!',
      database : 'burgers_db'
    });

}


// Export
module.exports = connection;