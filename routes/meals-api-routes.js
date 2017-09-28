var db = require("../models");

console.log("meal api routes ");
module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/meals", function(req, res){
      db.meals.create({
          meal: req.body.food,
          carbs: req.body.carbs,
<<<<<<< HEAD
          time: req.body.time,
          userName: req.body.userName,
        
=======
          timeEaten: req.body.meal-date,

>>>>>>> eb4b7da7a20aa52e4177f55cd19ec232bdce44de
      }).then(function(dbmeals){
            res.json(dbmeals);
            console.log("__________________________________");
            console.log(dbmeals);
            console.log("__________________________________");
            console.log(req.body.userName);
      });
    });
};


