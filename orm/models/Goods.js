var db = require("../db.js");

var goodsSchema = require('../schemas/goods.js');

module.exports = db.model("Goods", goodsSchema);