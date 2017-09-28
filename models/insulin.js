module.exports = function(sequelize, DataTypes){
    var insulin = sequelize.define("insulin",{
        
        time: {
            type: DataTypes.INTEGER
        },
        units: {
            type: DataTypes.FLOAT
        },
        kind: {
            type: DataTypes.STRING
        }
    });

    
    insulin.associate = function(models){
        insulin.belongsTo(models.userInfo, {
             as: models.userInfo.userName,
            foreignKey: {
                    // allowNull: false

            }
        });
    };
    return insulin;
}
