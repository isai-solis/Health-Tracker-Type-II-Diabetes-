module.exports = function(sequelize, DataTypes){
    var A1C = sequelize.define("A1C",{
        level: {
            type: DataTypes.FLOAT(2,1)
        },
        testDate: {
            type: DataTypes.DATE,
            validate: {
                notNull: true
            }
        }   
    });

    A1C.associate = function(models){
        A1C.belongsTo(models.userInfo, {
            as: models.userInfo.userName,
            foreignKey: {
                allowNull: false
            }
        });
    };

    return A1C;
};