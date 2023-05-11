const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.post('/addProject/:id', projectController.addProject);
router.get('/getProjects/:id', projectController.getProjects);

module.exports = router;
