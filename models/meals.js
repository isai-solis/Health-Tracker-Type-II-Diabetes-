
module.exports = function(sequelize, DataTypes){
    console.log('meals')
    var meals = sequelize.define("meals",{
        timeEaten: {
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
            foreignKey: models.userInfo_Id
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