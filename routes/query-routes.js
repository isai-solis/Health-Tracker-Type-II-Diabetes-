var db = require("../models");

module.exports = function(app){

    app.post("/api/datalog", function(req, res){
        
        var category= req.body.dataType;
        var userName = req.body.userName;
        
        switch(category){
            // case "userInfo":
            //     db.userInfo.findAll({
            //         where: {
            //             userName: userName
            //         }
            //     }).then(function (dbuserInfo) {
            //         console.log("USER INFO FROM QUERY CALL BACK");
            //         console.log(dbuserInfo)
            //         res.json(dbuserInfo);
            //     });
            //     break;
            

            case "meals":
                console
                db.meals.findAll({})
                .then(function (dbmeals) {
                    db.userInfo.findAll({where: {userName: userName}})
                    .then(function(userData){
                        res.json(userData);
                        console.log("MEALS DATA OOOOOOOOOOOOOOOOOOOOO");
                        console.log(userData);
                    })
                });
                
                break;

            case "insulin":
                db.insulin.findAll
                break;
            
            case "activity":

                break;
            
            case "bloodSugarM": 

                break;
            }

    });

};