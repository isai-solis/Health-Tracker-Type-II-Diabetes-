var db = require("../models");

module.exports = function(app){

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
    });

};


