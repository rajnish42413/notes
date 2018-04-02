var express=require('express');
var mysql=require('mysql');
var mangodb=require('mongodb');
var bodyparser=require('body-parser');
var jwt=require('jwt-simple');

//create server
var app=express();

//crete MIME Type for server
app.use(bodyparser.json());

//deploy the application
app.use(express.static(__dirname+"/../poc"));

//create connection object
var connection=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"root",
    "database":"poc"
});


//connect
connection.connect();

var tokensArray=[];

//rest api
app.post("/login",function(req,res){
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    connection.query("select uname from login_details where uname='"+uname+"'",function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},'hr@mnm.com');
            tokensArray.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});


//assign the port.
app.listen(8080);
console.log("Server Listening the port no.8080");



