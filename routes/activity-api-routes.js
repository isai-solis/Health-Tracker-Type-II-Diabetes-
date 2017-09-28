var db = require("../models");

module.exports = function(app){

     app.post("/api/activity", function(req, res){
      db.activity.create({
          activityTime: req.body.activity-time,
          level: req.body.activity,
          timeDuration: req.body.duration,
          howFeel: req.body.mood
      }).then(function(dbactivity){
            res.json(dbactivity);
      });
    });

};