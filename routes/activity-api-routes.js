var db = require("../models");

module.exports = function(app){

    app.post("/api/activity", function(req, res){
        db.activity.create({
            level: req.body.activity,
            howFeel: req.body.mood,
            timeDuration: req.body.duration,
            activityTime: req.body.time,
        }).then(function(dbactivity){
            db.userInfo.find({where: {userName: req.body.userName}})
            .then(function(user) {
                user.addActivity(dbactivity)
            })
        });
    });

};


