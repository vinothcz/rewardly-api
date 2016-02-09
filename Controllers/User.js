'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Rewardly';
var resultUsers = [];

var getUsers = function(userName,db, callback) {

   var cursor =db.collection('user').find(
   	{
   		user_name: userName
   	});
   cursor.each(function(err, doc) {
      if (doc != null) {
      	 resultUsers.push(doc);
      } else {
         callback();
      }
   });
};

module.exports.GetUsers = function (req, res) {

	var userName = req.params.username;
	resultUsers = [];
  	MongoClient.connect(url, function(err, db) {
			if(!err)
			{
				getUsers(userName,db, function() {
				db.close();
				console.log(resultUsers);
				res.status(200).json(resultUsers);
				});
			}
		});
};