module.exports = function(sequelize, DataTypes){
    var A1C = sequelize.define("A1C",{
        level: {
            type: DataTypes.STRING
        },
        time: {
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