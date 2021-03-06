module.exports = function(sequelize, DataTypes){
    var insulin = sequelize.define("insulin",{
        
        units: {
            type: DataTypes.INTEGER
        },
        kind: {
            type: DataTypes.STRING
        },
        timeTaken: {
            type: DataTypes.INTEGER
        }
    });

    insulin.associate = function(models){
        insulin.belongsTo(models.userInfo, {
             as: models.userInfo.userName,

        });
    };
    return insulin;
}
