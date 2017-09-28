var db = require("../models");

module.exports = function(app){
    app.post("/api/userInfo", function(req, res){
        
    
        db.userInfo.create(req.body).then(function(dbuserInfo){
            var user = dbuserInfo.userName;
            console.log(dbuserInfo.__proto__);
            res.redirect("/entry");
            res.end();
        });
    });
};

