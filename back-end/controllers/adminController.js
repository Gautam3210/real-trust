const projectModel = require("../models/projectsModel");
const clientModel = require("../models/clientsModel");
const userInfoModel = require("../models/userInfoModel");

// -----------------------post project data-------------------------------------------------

const postProjectData = async (req, res) => {
  try {
    const { projectName, projectDescription } = req.body;
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const newProject = new projectModel({
      projectName,
      projectDescription,
      imageUrl,
    });
    const savedProject = await newProject.save();

    res.json({ success: true, savedProject });
  } catch (err) {
    res.status(500).json({ error: "Failed to save project" });
  }
};

// -----------------------get project data-------------------------------------------------

const getProjectData = async (req, res) => {
  try {
    const projects = await projectModel.find();

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// -----------------------post client data-------------------------------------------------

const postClientData = async (req, res) => {
  try {
    const { clientName, clientDescription, clientDesignation } = req.body;

    const newClient = new clientModel({
      clientName,
      clientDescription,
      clientDesignation,
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    });

    const saved = await newClient.save();

    res.json({ success: true, saved });
  } catch (err) {
    console.error("Error saving client:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// -----------------------get client data-------------------------------------------------
const getClientData = async (req, res) => {
  try {
    const projects = await clientModel.find();

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// -----------------------getting userInfo-------------------------------------------------

const getUserInfo = async (req, res) => {
  try {
    const data = await userInfoModel.find();

    res.status(200).json(data);
  } catch (err) { 
    console.error("Failed to fetch consultations:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  postProjectData,
  getProjectData,
  postClientData,
  getClientData,
  getUserInfo,
};
