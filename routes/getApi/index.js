var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(1)
  res.end('hello', { title: 'Express' });
});

module.exports = router;
