module.exports = function(sequelize, DataTypes){

	var db = require("./models");

	//users
	db.userInfo.create({name: "Joe Smith", email: "js@gmail.com", gender: "male", birthDate: 1000, weight: 200, height: 68, userName: "jsmith", password: "1234"});

	db.userInfo.create({name: "Susan Jones", email: "sj@gmail.com", gender: "female", birthDate: 100000, weight: 120, height: 62, userName: "susjones15", password: "1234"});

	db.userInfo.create({name: "Aaron Rudd", email: "far@gmail.com", gender: "male", birthDate: 1000000, weight: 200, height: 68, userName: "ruddy", password: "1234"});

	db.userInfo.create({name: "Craig Gee", email: "geec@gmail.com", gender: "male", birthDate: 10009999, weight: 200, height: 68, userName: "craigy", password: "1234"});



	//activity
	db.activity.create({level: "activity", timeDuration: 60, howFeel: "Medium", activityTime: 1506629804,
	}).then(function(dbactivity){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addActivity(dbactivity)
	    })
	});

	db.activity.create({level: "activity", timeDuration: 60, howFeel: "Medium", activityTime: 1506629804,
	}).then(function(dbactivity){
	    db.userInfo.find({where: {userName: 'susjones15'}})
	    .then(function(user) {
	        user.addActivity(dbactivity)
	    })
	});

	db.activity.create({level: "activity", timeDuration: 60, howFeel: "Medium", activityTime: 1506629804,
	}).then(function(dbactivity){
	    db.userInfo.find({where: {userName: 'ruddy'}})
	    .then(function(user) {
	        user.addActivity(dbactivity)
	    })
	});


	//blood sugar
	db.bloodSugarM.create({mgDl: 100, timeOfM: 150662904,
	}).then(function(dbbloodSugarM){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addBloodSugarM(dbbloodSugarM)
	    })
	});

	db.bloodSugarM.create({mgDl: 100, timeOfM: 150562904,
	}).then(function(dbbloodSugarM){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addBloodSugarM(dbbloodSugarM)
	    })
	});

	db.bloodSugarM.create({mgDl: 80, timeOfM: 150462904,
	}).then(function(dbbloodSugarM){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addBloodSugarM(dbbloodSugarM)
	    })
	});

	db.bloodSugarM.create({mgDl: 140, timeOfM: 150362904,
	}).then(function(dbbloodSugarM){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addBloodSugarM(dbbloodSugarM)
	    })
	});

	db.bloodSugarM.create({mgDl: 110, timeOfM: 150262904,
	}).then(function(dbbloodSugarM){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addBloodSugarM(dbbloodSugarM)
	    })
	});


	//insulin
	db.insulin.create({timeTaken: 150662904, units: 4, kind: "basal"
	}).then(function(dbinsulin){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addInsulin(dbinsulin)
	    })
	});

	db.insulin.create({timeTaken: 150632904, units: 3, kind: "basal"
	}).then(function(dbinsulin){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addInsulin(dbinsulin)
	    })
	});

	db.insulin.create({timeTaken: 150612904, units: 1, kind: "basal"
	}).then(function(dbinsulin){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addInsulin(dbinsulin)
	    })
	});


	//meals
	db.meals.create({meal: "combo pizza", carbs: 50, timeEaten: 150662004
	}).then(function(dbmeals){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addMeals(dbmeals)
	    })
	});

	db.meals.create({meal: "mushroom pizza", carbs: 50, timeEaten: 150632004
	}).then(function(dbmeals){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addMeals(dbmeals)
	    })
	});

	db.meals.create({meal: "cauliflower/spinach", carbs: 5, timeEaten: 150612004
	}).then(function(dbmeals){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addMeals(dbmeals)
	    })
	});

	db.meals.create({meal: "pepperoni pizza", carbs: 50, timeEaten: 150658004
	}).then(function(dbmeals){
	    db.userInfo.find({where: {userName: 'jsmith'}})
	    .then(function(user) {
	        user.addMeals(dbmeals)
	    })
	});

};

