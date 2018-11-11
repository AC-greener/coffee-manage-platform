var express = require('express');
var router = express.Router();

/* render views. */
router.get('/', function(req, res, next) {
  res.render('order.ejs', { title: 'Express' });
});

router.get('/orderInfo', function(req, res, next) {
  res.render('orderInfo.ejs', { title: 'Express' });
});

router.get('/manageUser', function(req, res, next) {
  res.render('manageUser.ejs', { title: 'Express' });
});

router.get('/manageGoods', function(req, res, next) {
  res.render('manageGoods.ejs', { title: 'Express' });
});

module.exports = router;
