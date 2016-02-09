'use strict';

var express = require('express');
var routes = require('./routes');

var app =express();

console.log('express started');

 // Attach Routes & Start App
 app.use(routes);

app.listen('3005');
console.log('listening at port 3005');