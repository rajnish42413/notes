//import the express.
var express = require("express");

//import mysql
var mysql=require("mysql");

//Create the server.
var app = express();

//Node_MySQL  ---  app
app.use(express.static(__dirname+"/../Node_MySQL"));


//Create the Connection Object.
var connection = mysql.createConnection({
   host:'localhost',
    user:'root',
    password:'root',
    database:'node'
});


//Connect to DataBase.
connection.connect();


//Create the Restful URL  ---   get
app.get("/read",function (req,res) {
    connection.query("select * from emp",function (err,records,fields) {
       res.send(records);
    });
});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");