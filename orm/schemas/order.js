var mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
  userName: String,
  //学院名
  collegeName: String,
  //下单咖啡的数量
  coffeeNumber: String,
  orderCreateTime: String  
})

module.exports = orderSchema