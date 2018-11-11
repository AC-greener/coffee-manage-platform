var mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
  userName: String,
  //学院名
  orderName: String,
  orderCount: String,
  orderCreateTime: String  
})

module.exports = orderSchema