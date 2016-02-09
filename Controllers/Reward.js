'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Rewardly';
var resultRewards = [];

var getRewards = function(db, callback) {
   var cursor =db.collection('reward').find();
   cursor.each(function(err, doc) {
      if (doc != null) {
      	 resultRewards.push(doc);
      } else {
         callback();
      }
   });
};

module.exports.GetRewards = function (req, res) {

  	MongoClient.connect(url, function(err, db) {
			if(!err)
			{
				getRewards(db, function() {
				db.close();
				res.status(200).json(resultRewards);
				});
			}
		});
};