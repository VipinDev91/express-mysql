var express=require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var myobj={name:"vipin insert",address:"testing yuiyrii"};

app.get("/test",function(req,res){
MongoClient.connect(url, function(err, db) {
if (err) throw err;
db.collection("customers").insert(myobj,function(err,res){
/   if(err) console.log("insert records problemm !!!");
   console.log('successfully insertt !!!');
});

db.collection("customers").find({}).toArray(function(err, result) {
	   if(err) console.log('selection issuesss........');
	     console.log(result);
		 res.end(JSON.stringify(result));
});
});

}).listen(8080);
console.log("server running !!!");