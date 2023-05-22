const Cohort = require('../models/cohort/cohort.model');
const Student = require('../models/student/student.model');

const CreateCohort = async (req, res) => {
  try {
    const { cohortName, jrStartDate } = req.body;
    const cohort = new Cohort({
      cohortName,
      jrStartDate,
      status: 'jrActive',
      github: `https://github.com/orgs/student-tool/teams/${cohortName}`,
    });
    await cohort.save();
    res.status(201).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json(error?.message);
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
    console.log(studentId, cohortName);
    const cohort = await Cohort.findOne({ cohortName });
    if (!cohort) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    cohort.students.push(studentId);
    await cohort.save();
    res.status(200).json(cohort);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllCohortStudents = async (req, res) => {
  console.log('hit');
  try {
    const { cohortName } = req.params;

    const students = await Cohort.findOne({ cohortName }).populate('students');
    if (!students) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const changeCohort = async (req, res) => {
  try {
    const { currentCohortName, newCohortName, id } = req.body;
    console.log(currentCohortName, newCohortName, id);
    // change students cohortName

    await Student.findByIdAndUpdate(id.toString(), {
      cohortName: newCohortName,
    });

    // add student to new cohort
    const newCohort = await Cohort.findOne({ cohortName: newCohortName });

    // check if student is already in new cohort
    const isStudentInNewCohort = newCohort.students.find(
      (student) => student._id.toString() === id
    );
    if (isStudentInNewCohort) {
      return res
        .status(404)
        .json({ message: `Student already in ${newCohortName}` });
    } else {
      newCohort.students.push(id);
      await newCohort.save();
    }

    // remove student form prev cohort
    const prevCohort = await Cohort.findOne({ cohortName: currentCohortName });
    // check if student is in prev cohort
    const isStudentFound = prevCohort.students.find(
      (student) => student._id.toString() === id
    );
    if (!isStudentFound) {
      return res
        .status(404)
        .json({ message: `Student not found in ${currentCohortName}` });
    } else {
      prevCohort.students = prevCohort.students.filter(
        (student) => student._id.toString() !== id
      );
      await prevCohort.save();
      res.status(200).json({ message: 'Student cohort changed' });
    }
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
  getAllCohortStudents,
  changeCohort,
};
