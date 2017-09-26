var db = require("../models");

module.exports = function(app){

    app.post("/api/userInfo", function(req, res){
        db.userInfo.create({
            name: req.body.name,
            birthDate: req.body.birthDate,
            email: req.body.email,
            gender: req.body.gender,
            weight: req.body.weight,
            height: req.body.height,
            userName: req.body.userName,
            password: req.body.password,
        }).then(function(dbuserInfo){
                res.json(dbuserInfo);
        });
    });


};