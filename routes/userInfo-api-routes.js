var db = require("../models");

module.exports = function(app){

    app.post("/api/userInfo", function(req, res){
        db.userInfo.create(req.body).then(function(dbuserInfo){
                // res.json(dbuserInfo);
                console.log("post");
                var user = dbuserInfo.userName;
                console.log(user);
                res.end();
        });
    });
};

