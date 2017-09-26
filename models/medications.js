var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var medications = sequelize.define("medications",{
    brand: {
        type: Sequelize.STRING
    },
    frequency: {
        type: Sequelize.INTEGER
    },
    dose: {
        type: Sequelize.FLOAT
    },
    A1CLevels: {
        type: Sequelize.FLOAT
    }
});

medications.sync();

module.exports = medications;