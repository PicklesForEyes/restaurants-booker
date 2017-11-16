// Setting up dependencies...
var express= require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Setting up application
var app = express();
var PORT = 3000;
//Listening...
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});