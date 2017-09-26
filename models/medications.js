var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(){
    var medications = sequelize.define("medications",{
        
        brand: {
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        },
        frequency: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: true
            }
        },
        dose: {
            type: Sequelize.FLOAT,
            validate: {
                notNull: true
            }
        },
        A1CLevels: {
            type: Sequelize.FLOAT
        }
    });

    medications.associate = function(models){
        medications.belongsTo(models.userInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return medications;
};