const express = require('express');
const {postProjectData,getProjectData, postClientData, getClientData, getUserInfo, postSubscriber, getSubscriber} = require('../controllers/adminController');

const upload = require("../middlewares/multer");

const adminRoute = express.Router()

adminRoute.post('/post-projects', upload.single("projectImage"),postProjectData)
adminRoute.get('/get-projects', getProjectData)

adminRoute.post('/post-clients',upload.single("clientImage"), postClientData)
adminRoute.get('/get-clients', getClientData)

adminRoute.get('/get-userInfo', getUserInfo)


adminRoute.post('/post-subscribe', postSubscriber)
adminRoute.get('/get-subscribe', getSubscriber)




module.exports =  adminRoute;