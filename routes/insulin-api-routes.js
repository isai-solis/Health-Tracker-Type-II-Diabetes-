var db = require("../models");

module.exports = function(app){

    // log a user's insulin dose and time measurement was taken 
    app.post("/api/insulin", function(req, res){
      db.insulin.create({
          timeTaken: req.body.time,
          units: req.body.units,
          kind: req.body.type,

      }).then(function(dbinsulin){
            res.json(dbinsulin);
      });
    });
};






