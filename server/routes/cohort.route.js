const express = require('express');
const router = express.Router();
const {
  CreateCohort,
  GetAllCohorts,
  GetCohortByName,
  changeCohortStatus,
  addStudentToCohort,
  getAllCohortStudents,
  changeCohort,
} = require('../controllers/cohort.controller');

router.post('/createCohort', CreateCohort);
router.get('/getAllCohort', GetAllCohorts);
router.get('info/:cohortName', GetCohortByName);
router.put('changeCohortStatus/:cohortName', changeCohortStatus);
router.put('/add-student/:cohortName/', addStudentToCohort);
router.get('/students/:cohortName', getAllCohortStudents);
router.put('/changeCohort', changeCohort);

module.exports = router;
