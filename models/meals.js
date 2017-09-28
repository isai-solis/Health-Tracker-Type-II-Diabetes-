
module.exports = function(sequelize, DataTypes){
    var meals = sequelize.define("meals",{
        timeEaten: {
            type: DataTypes.INTEGER
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