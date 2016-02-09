'use strict';

var mongoClient=require('mongodb').MongoClient;
var mongoDbObj;

mongoClient.connect('mongodb://localhost/Rewardly', function(err, db){
  if(err)
    console.log(err);
  else {
    console.log("Connected to MongoDB");
    mongoDbObj={
      db: db,
      user: db.collection('user'),
      reward: db.collection('reward')
    }
  }
});