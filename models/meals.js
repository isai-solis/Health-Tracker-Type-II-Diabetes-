var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var meals = sequelize.define("meals",{
    meal: {
        type: Sequelize.STRING
    }
});

meals.sync();

module.exports = meals;



