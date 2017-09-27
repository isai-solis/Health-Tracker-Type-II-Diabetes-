var db = require("../models");

module.exports = function(app){

	app.post("/api/dbquery", function(req, res){
    db.(req.(dataType)).findAll({
  		where: {
    	authorId: 2
  		}
    }).then(function(data){
      res.json(data);
    });

};