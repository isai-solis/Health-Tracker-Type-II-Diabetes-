module.exports = function(sequelize, DataTypes){
    var activity = sequelize.define("activity",{
        
        level: {
            type: DataTypes.STRING
        },
        howFeel: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.TIME,
        }        
    });

    activity.associate = function(models){
        activity.belongsTo(models.userInfo, {
            as: models.userInfo.userName,
                foreignKey: {
                        // allowNull: false
                }
        });
    };

    return activity;
};


