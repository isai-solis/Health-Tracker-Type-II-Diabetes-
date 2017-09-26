var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var userInfo = sequelize.define("userInfo",{
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        gender:{
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

    userInfo.associate = function(models){
        userInfo.hasMany(models.activity, {
            onDelete: "cascade"
        });
        userInfo.hasMany(models.bloodSugarM, {
            onDelete: "cascade"
        });
         userInfo.hasMany(models.insulin, {
            onDelete: "cascade"
        });
        userInfo.hasMany(models.meals, {
            onDelete: "cascade"
        });
         userInfo.hasMany(models.medications, {
            onDelete: "cascade"
        });
         userInfo.hasMany(models.A1C, {
            onDelete: "cascade"
        });

    };

return userInfo;
};
