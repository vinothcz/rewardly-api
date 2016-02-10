'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Rewardly';
var resultFeeds = [];

var getTopTenFeeds = function(db, callback) {
   var cursor =db.collection('reward').find();
   cursor.each(function(err, doc) {
      if (doc != null) {
      	 resultFeeds.push(doc);
      } else {
         callback();
      }
   });
};

module.exports.GetFeeds = function (req, res) {

  	MongoClient.connect(url, function(err, db) {
			if(!err)
			{
				getTopTenFeeds(db, function() {
				db.close();
				res.status(200).json(resultFeeds);
				});
			}
		});
};