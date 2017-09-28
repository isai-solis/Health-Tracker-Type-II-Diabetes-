module.exports = function(sequelize, DataTypes){
    console.log('bloodSuyg')
    var bloodSugarM = sequelize.define("bloodSugarM",{
    
        mgDl: {
            type: DataTypes.INTEGER
        },
        timeOfM: {
            type: DataTypes.TIME,
        },
        
    });

    bloodSugarM.associate = function(models){
        bloodSugarM.belongsTo(models.userInfo, {
             as: models.userInfo.userName//, 
                // foreignKey: {
                    
                // }
        });
    };

    return bloodSugarM;
}


