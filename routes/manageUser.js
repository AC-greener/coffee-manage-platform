var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('manageUser.ejs', { title: 'Express' });
});

module.exports = router;
