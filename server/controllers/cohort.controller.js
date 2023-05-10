const Cohort = require('../models/cohort/cohort.model');
const Student = require('../models/student/student.model');

const CreateCohort = async (req, res) => {
  try {
    const { cohortName, jrStartDate } = req.body;
    const cohort = new Cohort({
      cohortName,
      jrStartDate,
      status: 'jrActive',
    });
    await cohort.save();
    res.status(201).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const GetAllCohorts = async (req, res) => {
  try {
    const cohorts = await Cohort.find();
    res.status(200).json(cohorts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const GetCohortByName = async (req, res) => {
  try {
    const { cohortName } = req.params;
    const cohort = await Cohort.findOne({ cohortName });
    if (!cohort) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    res.status(200).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const changeCohortStatus = async (req, res) => {
  try {
    const { cohortName } = req.params;
    const { status } = req.body;
    const cohort = await Cohort.findOne({ cohortName });
    if (!cohort) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    cohort.status = status;
    await cohort.save();
    res.status(200).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addStudentToCohort = async (req, res) => {
  try {
    const { cohortName } = req.params;
    const { studentId } = req.body;
    const cohort = await Cohort.findOne({ cohortName });
    if (!cohort) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    cohort.student.push(studentId);
    await cohort.save();
    res.status(200).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  CreateCohort,
  GetAllCohorts,
  GetCohortByName,
  changeCohortStatus,
  addStudentToCohort,
};
