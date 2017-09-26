var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var userInfo = sequelize.define("userInfo",{
        name: {
            type: Sequelize.STRING
        },
        birthDate: {
            type: Sequelize.DATE
        },
        weight: {
            type: Sequelize.INTEGER
        },
        height: {
            type: Sequelize.INTEGER
        },
        userName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    userInfo.associate = function(){
        userInfo.hasMany(models.activity, {
            onDelete: "cascade"
        });
    };

    userInfo.associate = function(models){
        userInfo.hasMany(models.bloodSugarM, {
            onDelete: "cascade"
        });
    };

    userInfo.associate = function(){
        userInfo.hasMany(models.insulin, {
            onDelete: "cascade"
        });
    };

    userInfo.associate = function(){
        userInfo.hasMany(models.meals, {
            onDelete: "cascade"
        });
    };

    userInfo.associate = function(){
        userInfo.hasMany(models.medications, {
            onDelete: "cascade"
        });
    };

return userInfo;
};
