var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var userInfo = sequelize.define("userInfo",{
    id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    birthDate: {
        type: Sequelize.DATE
    },
    weight: {
        type: Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER
    },
    userName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

userInfo.sync();

module.exports = userInfo;