var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../MondoDB_Example"));

var nareshIT = mongodb.MongoClient;

app.get("/mongodb",function (req,res) {
    nareshIT.connect("mongodb://localhost:27017/demo",function (err,db) {
        db.collection("products").find().toArray(function (err,array) {
            res.send(array);
        });
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");