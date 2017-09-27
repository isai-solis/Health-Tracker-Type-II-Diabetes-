
module.exports = function(sequelize, DataTypes){
    var meals = sequelize.define("meals",{
        time: {
            type: DataTypes.DATE
        },
        meal: {
            type: DataTypes.STRING
        },
        carbs: {
            type: DataTypes.INTEGER
        }
    });

    meals.associate = function(models){
        meals.belongsTo(models.userInfo, {
             as: models.userInfo.userName,
                foreignKey: {
                        allowNull: false
                }
        });
    };
    return meals;
}



