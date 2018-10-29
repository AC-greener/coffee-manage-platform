var db = require("../db.js");

var userSchema = require('../schemas/user.js');

module.exports = db.model("User", userSchema);