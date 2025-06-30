const express = require('express');
const projectData = require('../controllers/projectController');
const upload = require("../middlewares/multer");

const adminRoute = express.Router()

adminRoute.post('/projects', upload.single("projectImage"),projectData)


module.exports =  adminRoute;