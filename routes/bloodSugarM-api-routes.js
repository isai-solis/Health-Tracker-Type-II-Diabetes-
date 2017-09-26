var db = require("../models");

module.exports = function(app){

    app.post("/api/glucose", function(req, res){
      bloodSugarM.create({
          mgDl: req.body.mgDl,
          timeOfM: req.body.timeOfM
      });
    });






};