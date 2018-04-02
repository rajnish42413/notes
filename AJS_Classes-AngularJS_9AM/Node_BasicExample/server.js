//import the express
var express = require("express");

//Create the Server
var app = express();

//Relation Betwen app -- Node_BasicExample
app.use(express.static(__dirname+"/../Node_BasicExample"));

//Lauch the Angular Application
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//Assign the Port Number.
app.listen(8080);
console.log("Server Listening the Port No.8080");