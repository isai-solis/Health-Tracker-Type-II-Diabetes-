var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var activity = sequelize.define("activity",{
    id: {
        type: Sequelize.INTEGER
    },
    level: {
        type: Sequelize.STRING
    },
    howFeel: {
        type: Sequelize.STRING
    },
    
});

activity.sync();

module.exports = activity;