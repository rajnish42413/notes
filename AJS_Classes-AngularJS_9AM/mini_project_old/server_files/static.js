var express = require("express");
var fs = require("fs");
var router = express.Router();
router.get("/",function (req,res) {
    console.log(__dirname);
    fs.readFile("D:\\AJS_Classes\\Mini_Project\\static.json"
        ,function (err,data) {
      res.send(data);
   });
});
module.exports=router;