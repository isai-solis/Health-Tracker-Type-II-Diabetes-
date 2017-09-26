var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var insulin = sequelize.define("insulin",{
        
        time: {
            type: Sequelize.DATETIME
        },
        units: {
            type: Sequelize.FLOAT
        },
        kind: {
            type: Sequelize.STRING
        }
    });
    
    insulin.associate = function(models){
        insulin.belongsTo(models.userInfo, {
            as: userName,
            foreignKey: {
                    allowNull: false
            }
        });
    };
    return insulin;
}
