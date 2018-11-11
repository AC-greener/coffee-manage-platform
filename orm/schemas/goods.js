var mongoose = require('mongoose');
var goodsSchema = new mongoose.Schema({
  goodsName: {type: String},
  goodsNumber:  {type: Number, default: 0},
  goodsPrice: Number,
  goodsCreateTime: String,
})

module.exports = goodsSchema;