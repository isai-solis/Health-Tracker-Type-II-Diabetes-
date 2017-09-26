var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

 module.exports = function(){
    var bloodSugarM = sequelize.define("bloodSuagrM",{
    
        mgDl: {
            type: Sequelize.INTEGER
        },
        timeOfM: {
            type: Sequelize.DATETIME,
            validate: {
                isDate: true,
                notNull: true
            },
        },
        
    });

    bloodSugarM.associate = function(models){
        bloodSugarM.belongsTo(models.userInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return bloodSugarM;
}


