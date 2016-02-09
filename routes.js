'use strict';

var router = require('express').Router(),
    user = require('./controllers/User');

router.route('/api/UserName')
  .get(user.GetUsers);

module.exports = router;