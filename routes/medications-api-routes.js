var db = require("../models");

module.exports = function(app){
  app.post("/api/medications", function(req, res){
    db.medications.create({
      brand: req.body.brand,
      frequency: req.body.frequency,
      dose: req.body.dose,
    }).then(function(dbmedications){
      db.userInfo.find({where: {userName: req.body.userName}})
      .then(function(user) {
        user.addMedications(dbmedications)
      })
    });
  });
};