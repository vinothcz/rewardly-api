'use strict'

var MongoClient = require('mongodb').MongoClient;
var resultUsers = [];
var User = require('../Models/User');


module.exports.GetUsers = function (req, res) {

      var userName = req.params.username;
      resultUsers = [];

      if(userName!== '')
      {
            User
              .find({"user_name": new RegExp(userName, 'i')}, function(err, docs){
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
              .find({}, function(err, docs){
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

module.exports.SaveUsers = function (req, res) {
     
      var user = new User(req.body);

       user.save(function (err) {
         if (err) {
         console.log(err);
         }
         res.json('your data is saved');
      });
};