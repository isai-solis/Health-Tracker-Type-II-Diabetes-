var db = require("../models");

module.exports = function(app){

     app.post("/api/userInfo", function(req, res){
      db.userInfo.create({
        name: req.body.XXXXXX,
        birthDate: req.body.XXXXXXX,
        weight: req.body.XXXXXX,
        height: req.body.XXXXXX,
        userName: req.body.XXXXXX,
        password: req.body.XXXXXX,
      }).then(function(dbuserInfo){
            res.json(dbuserInfo);
      });
    });


};