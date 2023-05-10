const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.post('/addProject/:id', projectController.addProject);

module.exports = router;
