var orm = require('../config/orm');

burger = {
    create: function (burger_name) {
        return new Promise(function (resolve, reject) {
            orm.insertOne('burgers', 'burger_name', burger_name).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err)
            });
        });
    },
    devour: function (id) {
        return new Promise(function (resolve, reject) {
            orm.updateOne('burgers', {'devoured': 1}, {id: id}).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err)
            });
        });
    },
    select: function () {
        return new Promise(function (resolve, reject) {
        orm.selectAll('burgers').then(function(res){
            resolve(res);
        }).catch(function(err){
            reject(err);
        });
    });
}
}

// burger.create('GooGi Burger');
// burger.devour(3);
// burger.select().then(function(data){
//     console.log(data);
// });

module.exports = burger;