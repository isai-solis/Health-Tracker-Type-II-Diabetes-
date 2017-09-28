
module.exports = function(sequelize, DataTypes){
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


// db.healthrecord.create({/*healthdata*/}).then(function (healthrecord) {
//     db.user.find({where: {name: 'asdf'}})
//         .then(function(user) {
//             user.addHealthRecord(healthrecord)
//         })
// })



// meals.associate = function(models){
//         meals.belongsTo(models.userInfo, {
//             targetKey: models.userInfo.id,
//             constraints: false
//         });
//     };