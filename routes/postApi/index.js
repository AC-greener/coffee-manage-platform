var express = require('express');
var router = express.Router();

//引入数据model
var OrederInfo = require('../../orm/models/Order');
var UserInfo = require('../../orm/models/User')
var GoodsInfo = require('../../orm/models/Goods')

router.post('/addOrder', function(req, res, next) {
  new Date().toLocaleString()
  OrederInfo.create({
    orderName: req.body.orderName,
    orderCount: req.body.orderCount,
  }, function(err) {
    if(err) {
      res.end('订单提交失败')
    }
    res.render('success.ejs');
  })
});

router.post('/addManager', function(req, res, next) {
  // res.set('Content-Type', 'text/html, charset=utf-8')
  UserInfo.create({
    userId: req.body.userId,
    userType: req.body.userType,
  }, function(err) {
    if(err) {
      res.end('订单提交失败')
    }
    res.render('success.ejs');
  })
})
router.post('/addGoods', function(req, res, next) {
  // res.set('Content-Type', 'text/html, charset=utf-8')
  GoodsInfo.create({
    goodsName: req.body.goodsName,
    goodsNumber: req.body.goodsNumber,
    goodsPrice: req.body.goodsPrice
  }, function(err) {
    if(err) {
      res.end('订单提交失败')
    }
    res.render('success.ejs');
  })
})

module.exports = router;
