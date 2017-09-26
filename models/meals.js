var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var meals = sequelize.define("meals",{
        time: {
            type: Sequelize.DATETIME
        },
        meal: {
            type: Sequelize.STRING
        },
        carbs: {
            type: Sequelize.INTEGER
        }
    });

    meals.associate = function(models){
        meals.belongsTo(models.userInfo, {
            as: userName,
                foreignKey: {
                        allowNull: false
                }
        });
    };
    return meals;
}



