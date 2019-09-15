// Import SQL connection
var connection = require('./connection');
// var sql = require('mysql');

// Init orm object containing select all, insert one & update one functions
var orm = {
    // select all: takes tablename and where clause as input
    selectAll: function(tableInput) {
        // Build query to select all columns from variable table
        let query = 'SELECT * FROM ??';

        // Create new promise
        return new Promise(function(resolve, reject){
            // query table using table input
            connection.query(query, tableInput, function (err, res) {
                if (err) reject(err);
                // resolve promise with response
                resolve(res);
            });

        });

    },
    // Insert a record into table. Inputs: tablename, field name and value
    insertOne: function(tableInput, colName, colValue) {
        let query = 'INSERT INTO ?? (??) VALUES (?)';
        return new Promise(function(resolve, reject){
            connection.query(query, [tableInput, colName, colValue], function (err, res) {
                if (err) reject(err);
                // resolve promise with response
                resolve(res);

        });
    });
    },
    // Update  one record's values. Inputs: table name, SQL SET (fieldname: value (object)), SQL WHERE (fieldname: value (object))
    updateOne: function(tableInput, keyValueToUpdate, conditionKeyValue) {
        // Create new promise
        return new Promise(function(resolve, reject){
            // Build query for updating record
            let query = 'UPDATE ?? SET ? WHERE ?;';
            
            connection.query(query, [tableInput, keyValueToUpdate, conditionKeyValue], function (err, res) {
                if (err) reject(err);
                // Resolve with response
                resolve(res);
            });

        });
    }

}

// Export
module.exports = orm;