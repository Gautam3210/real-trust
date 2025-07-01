const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientName: String,
  clientDescription: String,
  clientDesignation: String,
  imageUrl: String,
});

module.exports = mongoose.model("client", clientSchema);
