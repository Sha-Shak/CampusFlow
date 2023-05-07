const Skill = require('../models/student/skill.model');
const Student = require('../models/student/student.model');
const juniorWeeks = require('./juniorWeeks.json');
const seniorWeeks = require('./seniorWeeks.json');
const getAllStudents = (req, res) => {
  res.send('Fetching All Students 200');
};
const getStudentByID = async (req, res) => {
  const studentId = req.params.id;
  const studentInfo = await Student.findById(studentId);
  res.status(200).send(studentInfo);
};

const createStudent = async (req, res) => {
  try {
    let student = new Student({
      ...req.body,
      // uncomment when you done testing
      // junior: juniorWeeks,
      // senior: seniorWeeks,
    });

    await student.save();

    res.status(201).json({ success: true, data: student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getJuniorSoftSkillsFirstWeek = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getStudentWeekInfo = async (req, res) => {
  const { id, week } = req.params;
  try {
    const student = await Student.findById(id)
      .populate({
        path: 'junior',
        populate: {
          path: 'softSkills.skill',
          model: 'Skill',
        },
      })
      .populate({
        path: 'senior',
        populate: {
          path: 'softSkills.skill',
          model: 'Skill',
        },
      })
      .populate({
        path: 'junior',
        populate: {
          path: 'techSkills.skill',
          model: 'Skill',
        },
      })
      .populate({
        path: 'senior',
        populate: {
          path: 'techSkills.skill',
          model: 'Skill',
        },
      });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { type } = student;
    const weekInfo = student[type][week - 1];

    // console.log(weekInfo.softSkills[0].skill.category);

    res.status(200).json(weekInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const addSoftTechSkillsByStudentID = async (req, res) => {
  const { id } = req.params;
  const { week, softSkills, techSkills } = req.body;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { type } = student;
    const weekInfo = student[type][week - 1];

    weekInfo.softSkills = softSkills;
    weekInfo.techSkills = techSkills;

    await student.save();

    res.status(200).json(weekInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
  // give me a json data like this
};

const changeJuniorStudentToSenior = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    if (student.type === 'senior') {
      return res.status(400).json({ message: 'Student is already a senior' });
    }
    student.type = 'senior';
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentByID,
  getJuniorSoftSkillsFirstWeek,
  getStudentWeekInfo,
  addSoftTechSkillsByStudentID,
  changeJuniorStudentToSenior,
};
