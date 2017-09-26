var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


module.exports = function(){
    var activity = sequelize.define("activity",{
        
        level: {
            type: Sequelize.STRING
        },
        howFeel: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize. DATETIME,
            validate: {
                notNull: true
            }
        }

        
    });

    return activity;
};


