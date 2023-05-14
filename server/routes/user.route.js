const express = require('express');
const router = express.Router();
// const githubController = require('../controllers/github.controller');
const userController = require('../controllers/user.controller');
// login to github
router.get('/access', userController.check);
router.post('/createUser', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);

module.exports = router;
