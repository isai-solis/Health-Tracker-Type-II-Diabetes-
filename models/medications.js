
module.exports = function(sequelize, DataTypes){
    var medications = sequelize.define("medications",{
        brand: {
            type: DataTypes.STRING,
            validate: {
                notNull: true
            }
        },
        frequency: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        dose: {
            type: DataTypes.FLOAT(6,1),
        },
    });
    
    medications.associate = function(models){
        medications.belongsTo(models.userInfo, {
             as: models.userInfo.userName,
            foreignKey: {
                    // allowNull: false
            }
        });
    };
    return medications;
};