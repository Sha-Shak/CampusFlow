const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github.controller');
// login to github
router.post('/access', githubController.getGithubAccessToken);

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

router.get('/getGithubInstructor', githubController.getGithubInstructor);
router.get('/getGithubMaintainers', githubController.getGithubMaintainers);
router.get('/getGithubTeams', githubController.getGithubTeams);
router.get('/getGithubOrgRepos', githubController.getGithubOrgRepos);
module.exports = router;

router.get('/getAccessToGithubRepo', githubController.getAccessToGithubRepo);
router.get(
  '/removeAccessToGithubRepo',
  githubController.removeAccessToGithubRepo
);

router.put('/addInstructor', githubController.addInstructor);

// debug
// router.put(
//   '/addStudentToCohortDebug',
//   githubController.addStudentToCohortDebug
// );
module.exports = router;
