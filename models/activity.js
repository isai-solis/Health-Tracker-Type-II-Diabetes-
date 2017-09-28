module.exports = function(sequelize, DataTypes){
        console.log('act')

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
            validate: {
                notNull: true
            }
        }

        
    });

    activity.associate = function(models){
        activity.belongsTo(models.userInfo, {
            as: models.userInfo.userName//,
                // foreignKey: {
                //         // allowNull: false
                // }
        });
    };

    return activity;
};


