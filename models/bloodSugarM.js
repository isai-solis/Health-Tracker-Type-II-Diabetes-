var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

 module.exports = function(){
    var bloodSugarM = sequelize.define("bloodSugarM",{
    
        mgDl: {
            type: Sequelize.INTEGER
        },
        timeOfM: {
            type: Sequelize.DATE,
            validate: {
                isDate: true,
                notNull: true
            },
        },
        
    });

    bloodSugarM.associate = function(models){
        bloodSugarM.belongsTo(models.userInfo, {
            as: userName, 
                foreignKey: {
                    allowNull: false
                }
        });
    };

    return bloodSugarM;
}


