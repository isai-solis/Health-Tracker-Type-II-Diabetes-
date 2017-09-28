var path = require("path");

module.exports = function(app){

  app.get("/createProfile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createprofile.html"));
  });

  app.get("/datalog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/datalog.html"));
  });

  app.get("/entry", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/entry.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
};

