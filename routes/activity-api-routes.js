var db = require("../models");

module.exports = function(app){

<<<<<<< HEAD
    app.post("/api/activity", function(req, res){
        db.activity.create({
            activityTime: req.body.activity,
            level: req.body.activity,
            timeDuration: req.body.duration,
            howFeel: req.body.mood
        }).then(function(dbactivity){
            db.userInfo.find({where: {userName: req.body.userName}})
            .then(function(user) {
                user.addActivity(dbactivity)
            })
        });
=======
     app.post("/api/activity", function(req, res){
      db.activity.create({
          activity: req.body.activity,
          howFeel: req.body.mood,
          timeDuration: req.body.duration,
          activityTime: req.body.time
      }).then(function(dbactivity){
            res.json(dbactivity);
      });
>>>>>>> 402b4bd42949a953f717153c17f9b881d473fb63
    });

};


