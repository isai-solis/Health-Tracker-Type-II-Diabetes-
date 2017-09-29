var db = require("../models");

module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/insulin", function(req, res){
        db.insulin.create({
            units: req.body.units,
            kind: req.body.type,
            timeTaken: req.body.time
        }).then(function (dbinsulin) {
            console.log(dbinsulin)
            db.userInfo.find({where: {userName: req.body.userName}})
                .then(function(user) {
                console.log("user");
                console.log(user);
                user.addInsulin(dbinsulin)
            })
        })
    });
};



//    db.insulin.create({
//           timeTaken: req.body.glucose-time,
//           units: req.body.insulin-units,
//           kind: req.body.insulin-type,

//       }).then(function(dbinsulin){
//             res.json(dbinsulin);
//       });


