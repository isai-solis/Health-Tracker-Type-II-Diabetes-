module.exports = function(sequelize, DataTypes){
    var userInfo = sequelize.define("userInfo",{
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        gender:{
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
        userName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    });

    userInfo.associate = function(models){
        userInfo.hasMany(models.activity, {
            onDelete: "cascade"
        });
        userInfo.hasMany(models.bloodSugarM, {
            onDelete: "cascade"
        });
         userInfo.hasMany(models.insulin, {
            onDelete: "cascade"
        });
        userInfo.hasMany(models.meals, {
            as: "meals",
            foreignKey: models.userInfo_Id

            // foreignKey: models.userInfo.Id,
            // onDelete: "cascade"
        });
        //  userInfo.hasMany(models.medications, {
        //     onDelete: "cascade"
        // });
        //  userInfo.hasMany(models.A1C, {
        //     onDelete: "cascade"
        // });

    };

return userInfo;
};
