const Student = require('../models/student/student.model');
const juniorWeeks = require('./juniorWeeks.json');
const seniorWeeks = require('./seniorWeeks.json');
const _ = require('lodash');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getAllActiveStudents = async (req, res) => {
  try {
    const students = await Student.find({ status: true });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getStudentByID = async (req, res) => {
  const studentId = req.params.id;
  const studentInfo = await Student.findById(studentId)
    .populate({
      path: 'checkpoints',
      populate: {
        path: 'softSkills.skill',
        model: 'Skill',
      },
    })
    .populate({
      path: 'checkpoints',
      populate: {
        path: 'techSkills.skill',
        model: 'Skill',
      },
    });
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

    res.status(201).json(student);
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
  const { id, week, type } = req.params;
  let studentType;
  if (type === '1') {
    studentType = 'junior';
  } else if (type === '2') {
    studentType = 'senior';
  }
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
    } else if (!student.status) {
      const weekInfo = student[studentType][week - 1];
      return res.status(201).json({
        message: 'Student is not active',
        weekInfo,
      });
    }

    const weekInfo = student[studentType][week - 1];

    // console.log(weekInfo.softSkills[0].skill.category);

    res.status(200).json(weekInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const setStudentWeekInfo = async (req, res) => {
  const { id, week } = req.params;
  const { softSkills, techSkills, assessmentMarks, unitMarks } = req.body;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { type } = student;
    const weekInfo = student[type][week - 1];

    weekInfo.softSkills = softSkills;
    weekInfo.techSkills = techSkills;
    weekInfo.assessmentMarks = assessmentMarks;
    weekInfo.unitMarks = unitMarks;

    await student.save();

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

const changeStudentsType = async (req, res) => {
  const { type } = req.body;
  const { ids } = req.body;
  const validTypes = ['junior', 'senior'];

  // Validate input parameters
  if (!validTypes.includes(type)) {
    return res.status(400).json({ message: `Invalid student type: ${type}` });
  }
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ message: 'Invalid student IDs' });
  }

  try {
    const students = await Student.find({ _id: { $in: ids } });
    const updatedStudents = [];

    for (const student of students) {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      if (student.type === type) {
        continue;
      }
      student.type = type;
      student.status = true;
      await student.save();
      updatedStudents.push(student);
    }

    res.status(200).json({ message: 'Student type updated', updatedStudents });
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

  if (allmarks.softSkills === undefined) {
    allmarks.softSkills = [];
  }
  if (allmarks.techSkills === undefined) {
    allmarks.techSkills = [];
  }
  if (allmarks.assessmentMarks == NaN) {
    allmarks.assessmentMarks = 0;
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

    // console.log('mid junior', checkpoints1);
    // console.log('end junior', checkpoints2);
    // inserting checkpoint to Student model inside checkpoint array
    if (student.checkpoints.length > 0) {
      student.checkpoints.map((checkpoint) => {
        if (checkpoint.weekName === 'mid Junior') {
          checkpoint = checkpoints1;
        } else if (checkpoint.weekName === 'end Junior') {
          checkpoint = checkpoints2;
        }
      });
    } else {
      student.checkpoints.push(checkpoints1);
      student.checkpoints.push(checkpoints2);
    }
    await student.save();
    const populatedStudent = await Student.findById(id)
      .populate({
        path: 'checkpoints.softSkills.skill',
        model: 'Skill',
      })
      .populate({
        path: 'checkpoints.techSkills.skill',
        model: 'Skill',
      });
    res.status(200).json(populatedStudent.checkpoints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const saveMidEndSeniorData = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id)
      .populate({
        path: 'senior',
        populate: {
          path: 'softSkills.skill',
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

    const midSeniorAllinfo = _.cloneDeep(student.senior).slice(0, 3);
    const endSeniorAllinfo = _.cloneDeep(student.senior).slice(3, 6);

    const checkpoints1 = createCheckPoints(midSeniorAllinfo, 'mid Senior');
    const checkpoints2 = createCheckPoints(endSeniorAllinfo, 'end Senior');

    // inserting checkpoint to Student model inside checkpoint array
    const populatedStudent = await Student.findById(id)
      .populate({
        path: 'checkpoints.softSkills.skill',
        model: 'Skill',
      })
      .populate({
        path: 'checkpoints.techSkills.skill',
        model: 'Skill',
      });

    if (student.checkpoints.length > 2) {
      student.checkpoints.map((checkpoint) => {
        if (checkpoint.weekName === 'mid Senior') {
          checkpoint = checkpoints1;
        }
        if (checkpoint.weekName === 'end Senior') {
          checkpoint = checkpoints2;
        }
      });
    } else {
      student.checkpoints.push(checkpoints1);
      student.checkpoints.push(checkpoints2);
    }
    await student.save();
    res.status(200).json(populatedStudent.checkpoints);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMidEndDataByStudentID = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id)
      .populate({
        path: 'checkpoints.softSkills.skill',
        model: 'Skill',
      })
      .populate({
        path: 'checkpoints.techSkills.skill',
        model: 'Skill',
      });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const allCheckpoints = student.checkpoints;
    res.status(200).json(allCheckpoints);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// get student by cohortName
const getStudentByCohortName = async (req, res) => {
  let { cohortName } = req.params;
  if (!cohortName) {
    return res.status(400).json({ message: 'Please provide cohortName' });
  }
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
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    // const { type } = student;

    // get unit marks from junior
    const allUnitMarks = student['junior'].map((week) => {
      return week.unitMarks.map((unit) => {
        return {
          unitName: unit.unitName,
          unitMarks: unit.marks,
        };
      });
    });
    res.status(200).json(allUnitMarks);
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

// array = []

// unitMarksArray
const JuniorUnitMarks = async (req, res) => {
  const { id } = req.params;
  const { type } = req.params;
  const unitMarks = [];

  // find junoir student
  const student = await Student.findById(id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  const juniorWeekInfo = student[type];
  juniorWeekInfo.map((week) => {
    week.unitMarks.map((unit) => {
      unitMarks.push(unit);
    });
  });
  // console.log(unitMarks);
  res.send(unitMarks);
};

const getAssessmentMarksByStudentID = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { type } = student;

    if (type === 'junior' || type === 'senior' || type === 'alumni') {
      const juniorAssessmentMarks = student['junior'].map((week) => {
        return {
          weekName: week.weekName,
          assessmentMarks: week.assessmentMarks,
        };
      });
      return res.status(200).json(juniorAssessmentMarks);
    }
    // else if (type === 'senior' || type === 'alumni') {
    //   const seniorAssessmentMarks = student[type].map((week) => {
    //     return {
    //       weekName: week.weekName,
    //       assessmentMarks: week.assessmentMarks,
    //     };
    //   });
    //   return res.status(200).json(seniorAssessmentMarks);
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllStudents,
  getAllActiveStudents,
  createStudent,
  getStudentByID,
  getJuniorSoftSkillsFirstWeek,
  getStudentWeekInfo,
  setStudentWeekInfo,
  addSoftTechSkillsByStudentID,
  changeStudentsType,
  saveMidEndJuniorData,
  saveMidEndSeniorData,
  getStudentByCohortName,
  getUnitMarksByStudentID,
  postUnitMarksByStudentID,
  JuniorUnitMarks,
  getAssessmentMarksByStudentID,
  getMidEndDataByStudentID,
};
