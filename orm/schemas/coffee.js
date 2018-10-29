var mongoose = require('mongoose');
var coffeeSchema = new mongoose.Schema({
  coffeeName: {type: String},
  coffeeNumber:  {type: Number, default: 0},
  coffeePrice: Number,
  coffeeCreateTime: String,
})

module.exports = coffeeSchema;