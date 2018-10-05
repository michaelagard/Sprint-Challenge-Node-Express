const express = require('express');
const router = express.Router();
// const actionModel = require('../data/helpers/actionModel');

router.get('/', (res, req) => {
  res.send('auth main')
});

module.exports = router;