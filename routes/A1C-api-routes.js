var db = require("../models");

module.exports = function(app){

     app.post("/api/A1C", function(req, res){
      db.A1C.create({
          time: req.body.XXXXXXX,
          level: req.body.XXXXXXXX
      }).then(function(dbA1C){
            res.json(dbA1C);
      });
    });

};