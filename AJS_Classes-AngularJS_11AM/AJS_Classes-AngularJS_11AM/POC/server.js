var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var jwt = require("jwt-simple");
var bodyparser = require("body-parser");
var fs = require("fs");

var app = express();

app.use(express.static(__dirname+"/../POC"));

app.use(bodyparser.json());

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"poc"
});

connection.connect();

var tokensArray=[];

app.post("/login",function(req,res){
    var uname = req.body.uname;

    connection.query("select uname from login_details where uname='"+uname+"'",
            function(err,recordsArray,fields){
                if(recordsArray.length>0){
                    var token = jwt.encode({'uname':uname},'hr@nareshit.in')    
                    tokensArray.push(token);
                    res.send({'login':'success','token':token});
                }else{
                    res.send({'login':'fail'});
                }
    });
});

app.post("/static",function(req,res){
    if( req.body.token  == tokensArray[0] ){
        fs.readFile(__dirname+"/sample.json", function(err,data){
            res.send(data);
        });
    }else{
        res.send({"404":"UnAuthenticated User !"});
    }
});


app.post("/mysql",function(req,res){
    if( req.body.token  == tokensArray[0] ){
        connection.query("select * from products",function(err,recordsArray,fields){
                res.send(recordsArray);
        });
    }else{
        res.send({"404":"UnAuthenticated User !"});
    }
});


var poc = mongodb.MongoClient;

app.post("/mongodb",function(req,res){
    if( req.body.token  == tokensArray[0] ){
        poc.connect("mongodb://localhost:27017/poc",
                    function(err,db){
            db.collection("products").find().toArray(
                        function(err,array){
                    res.send(array);
            });
        }); 
    }else{
        res.send({"404":"UnAuthenticated User !"});
    }
});


app.listen(3000);
console.log("Server Listening the Port No.3000")


