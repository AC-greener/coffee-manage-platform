var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  userName: String,
  userType: {type: String, default: 'user'},
  userPhone: Number, 
  userId: Number, 
})

module.exports = userSchema;