'use strict';

var express = require('express');
var routes = require('./routes');
var cors = require('cors');
var mongoose = require('mongoose');

var app =express();

console.log('express started');

//app.use(cors);

var baseRouteResponse = function(req,res) {
	res.send('test');
}

 //Attach Routes & Start App
 app.use(routes);


app.listen('3007');
console.log('listening at port 8080');