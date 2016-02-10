'use strict';

var router = require('express').Router();
var user = require('./Controllers/User');
var feed = require('./Controllers/Feed');
var reward = require('./Controllers/Reward');

router.route('/rewardly/api/users')
  .get(user.GetUsers);

router.route('/rewardly/api/users')
  .post(user.SaveUsers);

router.route('/rewardly/api/feeds')
  .get(reward.GetAllRewards);

router.route('/rewardly/api/rewards')
  .get(reward.GetAllRewards);

router.route('/rewardly/api/rewards')
  .post(reward.SaveRewards);

module.exports = router;