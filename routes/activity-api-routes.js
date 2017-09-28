var db = require("../models");

module.exports = function(app){

     app.post("/api/activity", function(req, res){
      db.activity.create({
          activity: req.body.activity,
          howFeel: req.body.mood,
          timeDuration: req.body.duration,
          activityTime: req.body.time
      }).then(function(dbactivity){
            res.json(dbactivity);
      });
    });

};