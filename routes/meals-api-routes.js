var db = require("../models");

console.log("meal api routes ");
module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/meals", function(req, res){
      db.meals.create({
          meal: req.body.food,
          carbs: req.body.carbs,
          time: req.body.time,
          userName: req.body.userName,
        
      }).then(function(dbmeals){
            res.json(dbmeals);
            console.log("__________________________________");
            console.log(dbmeals);
            console.log("__________________________________");
            console.log(req.body.userName);
      });
    });
};


