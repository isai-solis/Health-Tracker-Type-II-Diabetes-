var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/createProfile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createProfile.html"));
    });

    app.get("/profile", function(req, res){
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    }); 

    app.get("/entry", function(req, res){
        res.sendFile(path.join(__dirname, "../public/entry.html"));
    });

    app.get("/dataLog", function(req, res){
        res.sendFile(path.join(__dirname, "../public/dataLog.html"));
    });


};