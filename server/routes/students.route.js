const express = require('express');
const router = express.Router();
const studentsControllers = require('../controllers/students.controller');

router.get('/getAllStudents', studentsControllers.getAllStudents);
router.get('/:id', studentsControllers.getStudentByID);
router.post('/createStudent', studentsControllers.createStudent);
router.get(
  '/getJuniorSoftSkillsFirstWeek/:id',
  studentsControllers.getJuniorSoftSkillsFirstWeek
);
router.get(
  '/getStudentWeekInfo/:id/:week',
  studentsControllers.getStudentWeekInfo
);
router.put(
  '/setStudentWeekInfo/:id/:week',
  studentsControllers.setStudentWeekInfo
);
router.post(
  '/addSoftTechSkillsByID/:id',
  studentsControllers.addSoftTechSkillsByStudentID
);

router.put('/changeStudentsType/', studentsControllers.changeStudentsType);

router.post(
  '/saveMidEndJuniorData/:id',
  studentsControllers.saveMidEndJuniorData
);
router.get(
  '/getStudentByCohortName/:cohortName',
  studentsControllers.getStudentByCohortName
);
router.get(
  '/getUnitMarksByStudentID/:id',
  studentsControllers.getUnitMarksByStudentID
);

router.post('/check/:id', studentsControllers.postUnitMarksByStudentID);
router.get(
  '/getJuniorUnitMarks/:id/:type',
  studentsControllers.JuniorUnitMarks
);

router.get(
  '/getAssessmentMarksByStudentID/:id',
  studentsControllers.getAssessmentMarksByStudentID
);

module.exports = router;
