var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var meals = sequelize.define("meals",{
    meal: {
        type: Sequelize.STRING
    }
});

meals.sync();

module.exports = meals;


// what would be more useful? having the user input their actual meals (chicken sandwich, chips, etc) or having user input carbs, protein, fats?

