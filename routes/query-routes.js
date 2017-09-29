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
                
                db.userInfo.findAll({
                    where: {userName: userName},
                    include: [{
                        model: db.meals,
                        as: "meals"
                    }]
                }).then(function(data){
                    // res.JSON(data)
                    console.log(data);
                    console.log("MEALS DATA OOOOOOOOOOOOOOOOOOOOO");
                    
                });










                // // db.meals.findAll({where: {userName: userName}})
                // // .then(function (dbmeals) {
                // db.userInfo.findAll({ 
                //     where: { userName: userName },
                //     attributes: ["userInfoId"]
                // }).then(function(dbuserInfo){

                //     db.meals.findAll({
                //         where: {userName: dbuserInfo.userName}
                //     }).then(function(meals){
                //         res.json(meals);
                //         console.log(meals);
                //         meals.getMeals(dbuserInfo);
                //     });
                    
                //     console.log("MEALS DATA OOOOOOOOOOOOOOOOOOOOO");
                    
                // });
        
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