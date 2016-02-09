'use strict';

var router = require('express').Router();
var user = require('./controllers/User');
var feed = require('./controllers/Feed');
var reward = require('./controllers/Reward');

router.route('/api/users/:username')
  .get(user.GetUsers);

router.route('/api/feeds')
  .get(feed.GetFeeds);

router.route('/api/rewards')
  .post(reward.GetRewards);

module.exports = router;