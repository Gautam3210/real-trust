const userInfoModel = require("../models/userInfoModel");

const postUserInfo = async (req, res) => {
  try {
    const { name, email, mobile, address } = req.body;
    const newEntry = new userInfoModel({ name, email, mobile, address });
    const saved = await newEntry.save();


    res.json({ success: true, saved });
  } catch (err) {
    console.error("Error saving consultation:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { postUserInfo };
