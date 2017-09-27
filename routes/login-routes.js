var db = require("../models");

module.exports = function(app){
 
  app.post("/api/loginauth", function(req, res){
    db.userInfo.findOne({
			where: {
  		userName: req.body.name
			}
    }).then(function(data){
			if (data.password == req.body.password){
				res.JSON({login: true});
			} 
			else{
				res.JSON({login: false});
			}
  	});
	});
};