// var db = require("../models");

// module.exports = function(app){

<<<<<<< HEAD
//      app.post("/api/A1C", function(req, res){
//       db.A1C.create({
//           time: req.body.time,
//           level: req.body.level
//       }).then(function(dbA1C){
//             res.json(dbA1C);
//       });
//     });
=======
     app.post("/api/A1C", function(req, res){
      db.A1C.create({
          testDate: req.body.date,
          level: req.body.level
      }).then(function(dbA1C){
            res.json(dbA1C);
      });
    });
>>>>>>> eb4b7da7a20aa52e4177f55cd19ec232bdce44de

// };