module.exports = function(sequelize, DataTypes){

    var activity = sequelize.define("activity",{
        
        level: {
            type: DataTypes.STRING
        },
        howFeel: {
            type: DataTypes.STRING
        },
        timeDuration: {
            type: DataTypes.INTEGER
        },
        activityTime: {
            type: DataTypes.INTEGER,
        }

        
    });

    activity.associate = function(models){
        activity.belongsTo(models.userInfo, {
             as: models.userInfo.userName,

        });
    };

    return activity;
};


