// Setting up dependencies...
var express= require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up application
var app = express();
var PORT = 3000;
var tables = [];

//Listening...
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res){
<<<<<<< HEAD
	res.sendFile(path.join(__dirname, tables.html))
=======
	res.sendFile(path.join(__dirname, 'tables.html'))
>>>>>>> a1cc9276929b14a04732680c3cdff694783e1bcc
});

app.get("api/tables", function(req, res){
  res.JSON(tables)
});
