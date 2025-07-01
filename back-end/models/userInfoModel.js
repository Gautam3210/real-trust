const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("userInfo", userInfoSchema);
