var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var A1C = sequelize.define("A1C",{
        level: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize. DATETIME,
            validate: {
                notNull: true
            }
        }   
    });

    A1C.associate = function(models){
        A1C.belongsTo(models.userInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return A1C;
};