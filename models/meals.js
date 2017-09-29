
module.exports = function(sequelize, DataTypes){
    var meals = sequelize.define("meals",{
        meal: {
            type: DataTypes.STRING
        },
        carbs: {
            type: DataTypes.INTEGER
        },
        timeEaten: {
            type: DataTypes.INTEGER
        }
    });

    meals.associate = function(models){
        meals.belongsTo(models.userInfo, {
             as: models.userInfo.userName,
        });
    };
    return meals;
}






// meals.associate = function(models){
//         meals.belongsTo(models.userInfo, {
//             targetKey: models.userInfo.id,
//             constraints: false
//         });
//     };