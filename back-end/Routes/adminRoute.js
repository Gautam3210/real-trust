const express = require('express');
const {postProjectData,getProjectData, postClientData, getClientData, getUserInfo} = require('../controllers/adminController');

const upload = require("../middlewares/multer");

const adminRoute = express.Router()

adminRoute.post('/post-projects', upload.single("projectImage"),postProjectData)
adminRoute.get('/get-projects', getProjectData)

adminRoute.post('/post-clients',upload.single("clientImage"), postClientData)
adminRoute.get('/get-clients', getClientData)

adminRoute.get('/get-userInfo', getUserInfo)




module.exports =  adminRoute;