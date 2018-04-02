//import the mongodb.
var mongodb = require("mongodb");
//import express
var express = require("express");
//create the router object.
var router = express.Router();
var mongoClient = mongodb.MongoClient;
router.get("/",function (req,res) {
    //mongoClient Connects to MongoServer.
    mongoClient.connect("mongodb://localhost:27017/project",function (err,db) {
        //find the demo collection.
        var collection = db.collection("demo");
        //fetch the objects
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});
//export the file.
module.exports = router;