var db = require("../models");

console.log("meal api routes ");
module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/meals", function(req, res){
        db.meals.create({
            meal: req.body.food,
            carbs: req.body.carbs,
            timeEaten: req.body.date,
        }).then(function(dbmeals){
            db.userInfo.find({where: {userName: req.body.userName}})
            .then(function(user) {
                user.addMeals(dbmeals)
            })
        });
    });
};
