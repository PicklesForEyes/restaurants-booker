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
	res.sendFile(path.join(__dirname, '../index.html'))
});

app.get("api/tables", function(req, res){
  res.JSON(tables)
});
