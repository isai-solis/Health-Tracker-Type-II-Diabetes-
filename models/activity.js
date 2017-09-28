module.exports = function(sequelize, DataTypes){

    var activity = sequelize.define("activity",{
        
        level: {
            type: DataTypes.STRING
        },
        timeDuration: {
            type: DataTypes.INTEGER
        },
        howFeel: {
            type: DataTypes.STRING
        },
        activityTime: {
            type: DataTypes.DATE,
        }

        
    });

    activity.associate = function(models){
        activity.belongsTo(models.userInfo, {
             as: models.userInfo.userName,

        });
    };

    return activity;
};


