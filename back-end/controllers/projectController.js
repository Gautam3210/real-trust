const projectModel = require('../models/projectsModel')

const projectData = async(req, res)=>{
  try {
    

 
    const { projectName, projectDescription } = req.body;
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const newProject = new projectModel({ projectName, projectDescription, imageUrl });
    const savedProject = await newProject.save();


    res.json({ success: true, savedProject });
  } catch (err) {
    res.status(500).json({ error: "Failed to save project" });
  }
}

module.exports = projectData;