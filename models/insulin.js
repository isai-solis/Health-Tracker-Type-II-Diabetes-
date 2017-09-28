module.exports = function(sequelize, DataTypes){
    var insulin = sequelize.define("insulin",{
        
        timeTaken: {
            type: DataTypes.DATE
        },
        units: {
            type: DataTypes.INTEGER
        },
        kind: {
            type: DataTypes.STRING
        }
    });

    insulin.associate = function(models){
        insulin.belongsTo(models.userInfo, {
             as: models.userInfo.userName,

        });
    };
    return insulin;
}
