module.exports = function(sequelize, DataTypes){
   
    var bloodSugarM = sequelize.define("bloodSugarM",{
    
        mgDl: {
            type: DataTypes.INTEGER
        },
        timeOfM: {
            type: DataTypes.INTEGER,
        },
        
    });

    bloodSugarM.associate = function(models){
        bloodSugarM.belongsTo(models.userInfo, {
             as: models.userInfo.userName,
        });
    };

    return bloodSugarM;
}


