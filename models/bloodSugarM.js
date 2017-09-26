var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var bloodSugarM = sequelize.define("bloodSuagrM",{
    mgDl: {
        type: Sequelize.INTEGER
    },
    timeOfM: {
        type: Sequelize.TIME
    },
     validate: {
        isDate: true
    },
});

bloodSugarM.sync();

module.exports = bloodSugarM;