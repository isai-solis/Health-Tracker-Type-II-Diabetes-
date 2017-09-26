var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var insulin = sequelize.define("insulin",{
    id: {
        type: Sequelize.INTEGER
    },
    basalFreq: {
        type: Sequelize.INTEGER
    },
    basalQty: {
        type: Sequelize.FLOAT
    },
    basalTime: {
        type: Sequelize.INTEGER
    },
    validate: {
        isDate: true
      },
    bolusQty: {
        type: Sequelize.INTEGER
    }
});

insulin.sync();

module.exports = insulin;
