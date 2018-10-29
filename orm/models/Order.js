var db = require("../db.js");

var orderSchema = require('../schemas/order.js');

module.exports = db.model("Order", orderSchema);