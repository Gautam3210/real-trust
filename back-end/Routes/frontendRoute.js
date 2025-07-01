const express = require('express');
const { postUserInfo } = require('../controllers/frontendController');


const frontendRoute = express.Router()


frontendRoute.post('/post-userInfo', postUserInfo)


module.exports = frontendRoute;


