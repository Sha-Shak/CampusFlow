const express = require('express');
const router = express.Router();
// const githubController = require('../controllers/github.controller');
const userController = require('../controllers/user.controller');
// login to github
router.post('/access', userController.check);

module.exports = router;
