const orm = require("../config/orm.js");

var burger = {

    all: function (cb) {
        //the string it's the table

        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    //(table, ,colum, condition)
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },


    delete: function (objColVals, condition, cb) {
        orm.delete("burgers", objColVals, condition, function (res) {
            cb(res)
        })
    }
};



// Export the database functions for the controller (catsController.js).
module.exports = burger;
