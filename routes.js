'use strict';

var router = require('express').Router();
var user = require('./Controllers/User');
var feed = require('./Controllers/Feed');
var reward = require('./Controllers/Reward');

router.route('/api/users')
  .get(user.GetUsers);

router.route('/api/users')
  .post(user.SaveUsers);

router.route('/api/users/Authenticate')
  .post(user.Authenticate);

router.route('/api/feeds')
  .get(reward.GetAllRewards);

router.route('/api/rewards')
  .get(reward.GetAllRewards);

router.route('/api/rewards')
  .post(reward.SaveRewards);

module.exports = router;