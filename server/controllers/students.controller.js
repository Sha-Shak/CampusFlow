const Skill = require('../models/student/skill.model');
const Student = require('../models/student/student.model');
const juniorWeeks = require('./juniorWeeks.json');
const seniorWeeks = require('./seniorWeeks.json');
const _ = require('lodash');
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
      junior: juniorWeeks,
      senior: seniorWeeks,
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

function work(skillType, typeWiseStudentInfo, allmarks) {
  typeWiseStudentInfo.map((week) => {
    week[skillType].map((i) => {
      // console.log(i);
      if (allmarks[skillType] === undefined) {
        allmarks[skillType] = [];
      }
      let id = i.skill._id;
      let foundSkill = false;
      for (let obj of allmarks[skillType]) {
        if (obj.skill === id) {
          foundSkill = true;
        }
      }

      if (!foundSkill) {
        allmarks[skillType].push({ skill: id, marks: 0 });
        // console.log('found', allmarks[skillType]);
      }
      allmarks[skillType].map((obj) => {
        // console.log('skill ', obj);
        if (obj.skill === id) {
          // console.log(i.marks);
          obj.marks += i.marks;
        }
      });

      // if (!allmarks[skills.skill.skillName]) {
      //   // allmarks[skills.skill.skillName] = 0;
      //   // allmarks[skills.skill._id] = 'test';
      //   allmarks['marks'] = 0;
      // }

      // allmarks['marks'] += i.marks;
    });
  });
}

function createCheckPoints(typeWiseStudentInfo, weekName) {
  const allmarks = {};
  const checkpoints = {
    weekName: weekName,
    assessmentMarks: 0,
    softSkills: [],
    techSkills: [],
  };

  let totalAssesmentsMasrks = 0;
  typeWiseStudentInfo.map((week) => {
    totalAssesmentsMasrks += week.assessmentMarks;
  });
  checkpoints.assessmentMarks =
    totalAssesmentsMasrks / typeWiseStudentInfo.length;

  work('softSkills', typeWiseStudentInfo, allmarks);
  work('techSkills', typeWiseStudentInfo, allmarks);

  for (const skillType of Object.keys(allmarks)) {
    const skillArray = allmarks[skillType];
    skillArray.forEach((skill) => {
      skill.marks = skill.marks / typeWiseStudentInfo.length;
    });
  }
  checkpoints.softSkills = allmarks.softSkills;
  checkpoints.techSkills = allmarks.techSkills;
  return checkpoints;
  // console.log(checkpoints);
}

// TODO: need to insert data in end junior checkpoint
const saveMidEndJuniorData = async (req, res) => {
  const { id } = req.params;

  // const id = id;
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
        path: 'junior',
        populate: {
          path: 'techSkills.skill',
          model: 'Skill',
        },
      });
    if (!student) {
      // return 'Student not found';
      return res.status(404).json({ message: 'Student not found' });
    }

    const midJuniorAllinfo = _.cloneDeep(student.junior).slice(0, 3);
    const endJuniorAllinfo = _.cloneDeep(student.junior).slice(3, 6);

    const checkpoints1 = createCheckPoints(midJuniorAllinfo, 'mid Junior');
    const checkpoints2 = createCheckPoints(endJuniorAllinfo, 'end Junior');

    console.log('mid junior', checkpoints1);
    console.log('end junior', checkpoints2);
    // inserting checkpoint to Student model inside checkpoint array
    student.checkpoints.push(checkpoints1);

    student.checkpoints.push(checkpoints2);

    await student.save();
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// get student by cohortName
const getStudentByCohortName = async (req, res) => {
  let { cohortName } = req.params;
  cohortName = cohortName.toLowerCase();
  try {
    const result = await Student.find({ cohortName });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

// get unitMarks by studentID and weekName

const getUnitMarksByStudentID = async (req, res) => {
  const { id } = req.params;
  const { weekNumber } = req.body;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { type } = student;
    const weekInfo = student[type][weekNumber - 1].unitMarks;
    console.log(weekInfo.unitMarks);
    res.status(200).json(weekInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// post unit marks by studentID and weekName

const postUnitMarksByStudentID = async (req, res) => {
  const { id } = req.params;
  const { weekNumber, unitMarks } = req.body;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { type } = student;
    const weekInfo = student[type][weekNumber - 1];
    weekInfo.unitMarks = unitMarks;
    await student.save();
    res.status(200).json("student's unit marks updated");
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
  saveMidEndJuniorData,
  getStudentByCohortName,
  getUnitMarksByStudentID,
  postUnitMarksByStudentID,
};
