const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectDescription: String,
  imageUrl: String,
});

module.exports = mongoose.model("project", projectSchema);
