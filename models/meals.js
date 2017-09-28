
module.exports = function(sequelize, DataTypes){
    var meals = sequelize.define("meals",{
        timeEaten: {
            type: DataTypes.DATETIME
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



