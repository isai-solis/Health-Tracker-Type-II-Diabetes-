var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var meals = sequelize.define("meals",{
        
        meal: {
            type: Sequelize.STRING
        }
    });
    return meals;
}



