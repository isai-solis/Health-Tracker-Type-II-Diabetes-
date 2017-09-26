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
    return bloodSugarM;
}


