module.exports = function(sequelize, DataTypes){
    var bloodSugarM = sequelize.define("bloodSugarM",{
    
        mgDl: {
            type: DataTypes.INTEGER
        },
        timeOfM: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
                notNull: true
            },
        },
        
    });

    bloodSugarM.associate = function(models){
        bloodSugarM.belongsTo(models.userInfo, {
             as: models.userInfo.userName, 
                foreignKey: {
                    allowNull: false
                }
        });
    };

    return bloodSugarM;
}


