
module.exports = function(sequelize, DataTypes){
    var meals = sequelize.define("meals",{
        time: {
            type: DataTypes.STRING
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