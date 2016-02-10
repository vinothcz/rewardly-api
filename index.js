'use strict';

var express = require('express');
var routes = require('./routes');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var app =express();

console.log('express started');

//app.use(cors);

var baseRouteResponse = function(req,res) {
	res.send('test');
}

// Connect to the db
mongoose.connect("mongodb://localhost:27017/Rewardly_New");

app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({
  extended: true,
 }));

app.use(bodyParser.json({
 }));

 //Attach Routes & Start App
 app.use(routes);

app.listen('3007');
console.log('listening at port 3007');