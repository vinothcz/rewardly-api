'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Rewardly';
var resultRewards = [];
var Reward = require('../Models/Reward');
var User = require('../Models/User');
var mongoose = require('mongoose');
var top5users = [];

module.exports.GetAllRewards = function (req, res) {
   resultRewards = [];
  	Reward
     .find({})
     .populate('user_recieved')
     .populate('user_awarded')
     .exec(
      function(err, docs){
      if(!err) {
          if (docs != null) {
          resultRewards.push(docs);
          res.status(200).json(resultRewards);
      }
   }
   });
};

module.exports.GetTop5Rewards = function (req, res) {
   top5users = [];
           User
              .find({})
              .limit(5)
              .select('user_name first_name last_name')
              .exec(function(err, docs){
               if(!err) {
                   if (docs != null) {
                     console.log(docs);
                   top5users.push((docs));
                   res.status(200).json(top5users);
               }
            }
          });
};

module.exports.SaveRewards = function (req, res) {
     
      var data = req.body

      var reward = new Reward({
         "type" : data.type,
         "points" : data.points,
         "comment" : data.comment,
         "user_recieved": data.user_recieved,
         "user_awarded": data.user_awarded
      });
       console.log(reward);
       reward.save(function (err) {
         if (err) {
         console.log(err);
         }
         res.json('your data is saved');
      });
}