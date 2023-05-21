const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github.controller');
const authMiddleware = require('../middleware/auth.middleware');
// login to github
router.post('/access', githubController.getGithubAccessToken);

router.get('/getGithubUser', authMiddleware, githubController.getGithubUser);
router.get(
  '/getAllOrganizationMembers',
  authMiddleware,
  githubController.getAllOrganizationMembers
);
router.get('/getAllCohorts', authMiddleware, githubController.getAllCohorts);
router.get(
  '/getStudentsInCohort',
  authMiddleware,
  githubController.getStudentsInCohort
);

router.put(
  '/addStudentToCohort',
  authMiddleware,
  githubController.addStudentToCohort
);

router.delete(
  '/deleteStudentFromCohort',
  authMiddleware,
  githubController.deleteStudentFromCohort
);
router.post('/addCohort', authMiddleware, githubController.addCohort);

router.get(
  '/getGithubInstructor',
  authMiddleware,
  githubController.getGithubInstructor
);
router.get(
  '/getGithubMaintainers',
  authMiddleware,
  githubController.getGithubMaintainers
);
router.get('/getGithubTeams', authMiddleware, githubController.getGithubTeams);
router.get(
  '/getGithubOrgRepos',
  authMiddleware,
  githubController.getGithubOrgRepos
);

router.get(
  '/getAccessToGithubRepo',
  authMiddleware,
  githubController.getAccessToGithubRepo
);
router.get(
  '/removeAccessToGithubRepo',
  authMiddleware,
  githubController.removeAccessToGithubRepo
);

router.put('/addInstructor', authMiddleware, githubController.addInstructor);

router.get(
  '/getCollaborators/:userName/:projectName',

  githubController.getCollaborators
);

// router.post('/changeCohort', githubController.changeCohort);

module.exports = router;
