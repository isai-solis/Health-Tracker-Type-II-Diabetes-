var db = require("../models");

module.exports = function(app){

    app.post("/api/datalog", function(req, res){
        
        var category= req.body.dataType;
        var userName = req.body.userName;
        
        switch(category){
            case "meals":
                db.userInfo.findAll({
                    where: {userName: userName},
                    include: [{
                        model: db.meals,
                        as: "meals"
                    }]
                }).then(function(data){
                    var allMeals = [];
                    
                    for(var i=0; i < data[0].meals.length; i++ ){
                        var loggedMeal = {
                            dataMeal: data[0].meals[i].meal,
                            dataCarbs: data[0].meals[i].carbs,
                            dataTimeEaten: data[0].meals[i].timeEaten
                        }
                        allMeals.push(loggedMeal);
                    }
                    var queryReturnMeals = {
                        key: allMeals
                    }
                    res.json(queryReturnMeals);
                    console.log(queryReturnMeals);
                });
                break;

            case "insulin":
                db.userInfo.findAll({
                    where: {userName: userName},
                    include: [{
                        model: db.insulin,
                        as: "insulin"
                    }]
                }).then(function(data){
                    var allInsulin = [];

                    for(var i=0; i < data[0].insulin.length; i++ ){
                        var loggedInsulin = {
                            dataUnits: data[0].insulin[i].units,
                            dataKins: data[0].insulin[i].kind,
                            dataTimeTaken: data[0].insulin[i].timeTaken
                        }
                        allInsulin.push(loggedInsulin);
                    }
                    var queryReturnInsulin = {
                        key: allInsulin
                    }
                    res.json(queryReturnInsulin);
                    console.log(queryReturnInsulin);
                });
                break;
            
            case "activity":
                db.userInfo.findAll({
                    where: {userName: userName},
                    include: [{
                        model: db.activity,
                        as: "activity"
                    }]
                }).then(function(data){
                    var allactivity = [];
                    
                    for(var i=0; i < data[0].activity.length; i++ ){
                        var loggedactivity = {
                            dataLevel: data[0].activity[i].level,
                            dataMood: data[0].activity[i].howFeel,
                            dataTimeDuration: data[0].activity[i].timeDuration,
                            dataActivityTime: data[0].activity[i].activityTime
                        }
                        allactivity.push(loggedactivity);
                    }
                    var queryReturnactivity = {
                        key: allactivity
                    }
                    res.json(queryReturnactivity);
                    console.log(queryReturnactivity);
                });
                break;
            
            case "bloodSugarM": 
                db.userInfo.findAll({
                    where: {userName: userName},
                    include: [{
                        model: db.bloodSugarM,
                        as: "bloodSugarM"
                    }]
                }).then(function(data){
                    var allbloodSugarM = [];
     
                    for(var i=0; i < data[0].bloodSugarM.length; i++ ){
                        var loggedbloodSugarM = {
                            dataMeal: data[0].bloodSugarM[i].mgDl,
                            dataTimeOfM: data[0].bloodSugarM[i].timeOfM,
                        }
                        allbloodSugarM.push(loggedbloodSugarM);
                    }
                    var queryReturnbloodSugarM = {
                        key: allbloodSugarM
                    }
                    res.json(queryReturnbloodSugarM);
                    console.log(queryReturnbloodSugarM);
                });
                break;
            }
    });
};