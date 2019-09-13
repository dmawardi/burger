var orm = require('../config/orm');

burger = {
    selectAll: orm.ORM.selectAll,
    updateOne: orm.ORM.updateOne,
    insertOne: orm.ORM.insertOne
}

module.exports = burger;