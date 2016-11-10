
var express = require('express');
var app = express();
var mongojs = require("mongojs");
var mongo = mongojs('contactlist', ['contactlist']);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
 app.get('/contactlist', function(req,res){
 	console.log("i received a Get request");
 	db.contactlist.find(function(err,docs){
 		console.log(docs);
 		res.json(docs);
 	});
 });

 app.post("/contactlist",function(req,res){
 	consolg.log(req.body);
 	db.contactlist.save(req.body,function(err,docs){
 		res.json(docs);
 	});
 });