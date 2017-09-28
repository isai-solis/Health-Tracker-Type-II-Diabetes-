var db = require("../models");

module.exports = function(app){

    // log a user's blood glucose measurant and time measurement was taken 
    app.post("/api/glucose", function(req, res){
      db.bloodSugarM.create({
          mgDl: req.body.glucose,
          timeOfM: req.body.glucose-time
      }).then(function(dbbloodSugarM){
            res.json(dbbloodSugarM);
      });
    });

    // get all of the logged blood sugar measurements
    // app.get("", function(req, res){
    //     db.bloodSugarM.findAll({}).then(function(dbbloodSugarM){
    //         res.json(dbbloodSugarM);
    //     });
    // });
};