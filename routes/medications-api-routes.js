var db = require("../models");

module.exports = function(app){

     app.post("/api/medications", function(req, res){
      db.medications.create({
        brand: req.body.XXXXXX,
        frequency: req.body.XXXXXXX,
        dose: req.body.XXXXXX,
      }).then(function(dbmedications){
            res.json(dbmedications);
      });
    });
};