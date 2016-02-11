'use strict'

var MongoClient = require('mongodb').MongoClient;
var User = require('../Models/User');
var top5users = [];

module.exports.GetUsers = function (req, res) {

      var userName = req.query.search;
      var resultUsers = [];
      var noofitems = req.query.noofitems;
  
      if(userName!== '')
      {
            User
              .find({"user_name": new RegExp(userName, 'i')})
              .limit(noofitems)
              .exec(function(err, docs){
               if(!err) {
                   if (docs != null) {
                     console.log(docs);
                   resultUsers.push(docs);
                   res.status(200).json(resultUsers);
               }
            }
          });
      }
      else
      {

            User
              .find({})
              .limit(noofitems)
              .exec(function(err, docs){
               if(!err) {
                   if (docs != null) {
                     console.log(docs);
                   resultUsers.push(docs);
                   res.status(200).json(resultUsers);
               }
            }
          });
      }
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

module.exports.SaveUsers = function (req, res) {
     
      var user = new User(req.body);

       user.save(function (err) {
         if (err) {
         console.log(err);
         }
         res.json('your data is saved');
      });
};

module.exports.Authenticate = function (req, res) {
     
      var emailaddress = req.body.email;
     
       if(emailaddress!== '')
       {   
            User
              .find({"email": emailaddress})
              .limit(1)
              .exec(function(err, docs){
                   if (!err && docs != null && docs[0] !== undefined) {
                    var userrecord = {
                    "userId" : docs[0]._id,
                    "user_name": docs[0].user_name,
                    "currently_active" : docs[0].currently_active
                   }

                   res.status(200).json(userrecord);
               }
               else {
                  res.status(401).json("user doesn't have access to the application");
               }
            });
        }
        else {

            res.status(401).json("user doesn't have access to the application");
        }
};