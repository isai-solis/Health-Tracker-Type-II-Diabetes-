var db = require("../models");

module.exports = function(app){

     app.post("/api/activity", function(req, res){
      db.activity.create({
          time: req.body.time,
          level: req.body.activity,
          duration: req.body.duration,
          howFeel: req.body.mood
      }).then(function(dbactivity){
            res.json(dbactivity);
      });
    });

};