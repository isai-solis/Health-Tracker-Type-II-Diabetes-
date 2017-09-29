var db = require("../models");

module.exports = function(app){
    app.post("/api/loginauth", function(req, res){
        db.userInfo.findOne({
            where: { userName: req.body.userName}
            attributes: ['password'] 
        }).then(function(dbuserInfo){
            console.log("database password: " + dbuserInfo.password)
            res.text(dbuserInfo);
            res.redirect("/entry");
        });
    });
};