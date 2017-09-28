var db = require("../models");

module.exports = function(app){
    app.post("/api/userInfo", function(req, res){
        db.userInfo.create(req.body).then(function(dbuserInfo){
            // res.json(dbuserInfo);
           
            var user = dbuserInfo.userName;

            // sessionStorage.setItem('userName', user);

            console.log(dbuserInfo.__proto__);
            res.redirect("/entry");
            res.end();
        });
    });
};

