const express = require('express');
const router = express.Router();
const {
  CreateCohort,
  GetAllCohorts,
  GetCohortByName,
  changeCohortStatus,
  addStudentToCohort,
} = require('../controllers/cohort.controller');

router.post('/createCohort', CreateCohort);
router.get('/getAllCohort', GetAllCohorts);
router.get('/:cohortName', GetCohortByName);
router.put('/:cohortName', changeCohortStatus);
router.put('/:cohortName/add-student', addStudentToCohort);

module.exports = router;
