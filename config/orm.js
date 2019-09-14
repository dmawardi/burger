var connection = require('./connection');
// var sql = require('mysql');


var orm = {
    selectAll: function(tableInput, whereClause) {
        let query = 'SELECT * FROM ??';

        return new Promise(function(resolve, reject){
            connection.query(query, tableInput, function (err, res) {
                if (err) reject(err);
                resolve(res);
            });

        });

    },
    insertOne: function(tableInput, colName, colValue) {
        let query = 'INSERT INTO ?? (??) VALUES (?)';
        return new Promise(function(resolve, reject){
            connection.query(query, [tableInput, colName, colValue], function (err, res) {
                if (err) reject(err);
                console.log(res);
                resolve(res);

        });
    });
    },
    updateOne: function(tableInput, keyValueToUpdate, conditionKeyValue) {
        return new Promise(function(resolve, reject){
            let query = 'UPDATE ?? SET ? WHERE ?;';
            
            connection.query(query, [tableInput, keyValueToUpdate, conditionKeyValue], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });

        });
    }

}

// orm.updateOne('burgers', {burger_name: })

module.exports = orm;