const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github.controller');
// login to github
router.get('/access', githubController.getGithubAccessToken);

router.get('/getGithubUser', githubController.getGithubUser);
router.get(
  '/getAllOrganizationMembers',
  githubController.getAllOrganizationMembers
);
router.get('/getAllCohorts', githubController.getAllCohorts);
router.get('/getStudentsInCohort', githubController.getStudentsInCohort);

router.put('/addStudentToCohort', githubController.addStudentToCohort);

router.delete(
  '/deleteStudentFromCohort',
  githubController.deleteStudentFromCohort
);
router.post('/addCohort', githubController.addCohort);
module.exports = router;
