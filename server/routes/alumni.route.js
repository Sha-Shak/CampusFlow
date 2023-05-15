const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/alumni.controller');

router.get('/test', alumniController.test);
router.post('/convertToAlumni/:id', alumniController.convertToAlumni);
router.post('/postInfo/:id', alumniController.postInfo);
router.post('/addSkills/:id', alumniController.addSkills);
// router.post('/postAbout/:id', alumniController.postAbout);
// router.post('/addEducation/:id', alumniController.addEducation);
// router.post('/addExperience/:id', alumniController.addExperience);
// router.delete('/deleteEducation/:id', alumniController.deleteEducation);
router.delete('/deleteInfo/:id', alumniController.deleteInfo);
module.exports = router;
