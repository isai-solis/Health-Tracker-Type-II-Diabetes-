var db = require("../models");

module.exports = function(app){

	app.post("/api/dbquery", function(req, res){
    db.(req.(dataType)).findAll({
  		where: {
    	userName = req.dataType.userName
  		}
    }).then(function(data){
    	console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    	console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    	console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    	console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    	console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    	console.log(data);
      res.json(data);
    });

};