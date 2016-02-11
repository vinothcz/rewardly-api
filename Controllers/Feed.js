'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Rewardly';
var resultFeeds = [];

module.exports.GetFeeds = function (req, res) {

    Reward
     .find({})
     .populate('user_recieved')
     .populate('user_awarded')
     .group
     .exec(
      function(err, docs){
      if(!err) {
          if (docs != null) {
            console.log(docs);
          resultRewards.push(docs);
          res.status(200).json(resultRewards);
      }
   }
   });
};