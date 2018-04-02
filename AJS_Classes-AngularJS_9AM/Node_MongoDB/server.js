var express = require("express");
var mongodb=require("mongodb");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static(__dirname+"/../Node_MongoDB"));
app.use(bodyparser.json());


var mongoClient = mongodb.MongoClient;

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://localhost:27017/node_db",function (err,db) {
        var response={};
        var collection = db.collection("emp");
        collection.find().toArray(function (err,doc) {
            response.emp=doc;
            res.send(response);
        });
    });
});


app.listen(8080);
console.log("Server Listening the Port No.8080");