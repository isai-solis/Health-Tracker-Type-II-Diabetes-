var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var meals = sequelize.define("meals",{
        
        meal: {
            type: Sequelize.STRING
        }
    });

    meals.associate = function(models){
        meals.belongsTo(models.userInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return meals;
}



