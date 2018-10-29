var db = require("../db.js");

var coffeeSchema = require('../schemas/coffee.js');

module.exports = db.model("Coffee", coffeeSchema);