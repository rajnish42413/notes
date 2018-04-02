var express = require("express");
var mongodb = require("mongodb");
var mysql = require("mysql");
var jwt = require("jwt-simple");
var bodyparser = require("body-parser");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/../mini_project_new"));
app.use(bodyparser.json());


app.get("/",function (req,res) {
    res.redirect("/index.html");
});

var mongoClient = mongodb.MongoClient;
var l_db;
var tokens=[];
app.post("/login" , function (req,res) {



    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;


    mongoClient.connect("mongodb://localhost:27017/mini_project",function (err,db) {
        l_db=db;
        var collection = l_db.collection("login");
        collection.find().toArray(function (err, array) {


            if(array[0].uname==uname && array[0].upwd==upwd){
                var token = jwt.encode({"uname":uname},"admin@nareshit.in")
                tokens.push(token);
                res.send({"login":"success","token":token});
            }else{
                res.send({"login":"failure"});
            }
        });
    });
});



app.post("/static",function (req,res) {
   if (req.body.token == tokens[0]){
        fs.readFile(__dirname+"/customers.json",function (err,data) {
           res.send(data.toString());
        });
   } else{
       res.send("UnAuthorised User");
   }
});


app.post("/mongo",function (req,res) {
    if (req.body.token == tokens[0]){
       var collection = l_db.collection("emp");
       collection.find().toArray(function (err, array) {
          res.send(array);
       });
    } else{
        res.send("UnAuthorised User");
    }
});



app.listen(8080);
console.log("server listening the port no.8080");