const Student = require('../models/student/student.model');
const Alumni = require('../models/alumni/alumni.model');
// const Skill = require('../models/skill/skill.model');

// util functions
const filterByStack = (allAlumniList, stack) => {
  const filteredAlumniList = allAlumniList.filter((alumni) => {
    // console.log(alumni.alumniDetails.stack);
    if (alumni.alumniDetails.stack === stack) return alumni;
  });
  //   console.log(filteredAlumniList.length);
  return filteredAlumniList;
};

const filterByReactAngular = (allAlumniList, stack) => {
  const filteredAlumniListByReactAngular = [];

  allAlumniList.forEach((alumni) => {
    alumni.checkpoint.techSkills.forEach((techSkill) => {
      if (techSkill.skill.toString() === stack) {
        console.log(techSkill.skill.toString(), techSkill.marks);
        filteredAlumniListByReactAngular.push({
          alumni: alumni,
          skillId: techSkill.skill.toString(),
          marks: techSkill.marks,
        });
      }
    });
  });

  // sort res by marks
  filteredAlumniListByReactAngular.sort((a, b) => {
    return b.marks - a.marks;
  });
  console.log(filteredAlumniListByReactAngular, 'debug');
  return filteredAlumniListByReactAngular;
};

const test = async (req, res) => {
  res.status(200).send('Hello World');
};

const stackWiseFilter = async (req, res) => {
  const { stack } = req.query;
  try {
    // find all alumni from student collection
    const students = await Student.find({ type: 'alumni' });

    const allAlumniList = [];
    for (const student of students) {
      const { checkpoints, alumniId } = student;
      const alumniDetails = await Alumni.findById(alumniId);

      allAlumniList.push({
        studentId: student._id,
        alumniDetails: alumniDetails,
        checkpoint: checkpoints[3],
      });
    }

    //  filtered by frontend, backend, fullstack
    const filteredAlumniListByStack = filterByStack(allAlumniList, 'frontend');

    // need to filter by react, angular
    const react = '64645b378c9c35d274514d3d';
    const filterByReactAngularList = filterByReactAngular(
      filteredAlumniListByStack,
      react
    );

    // console.log(students);
    res.send(filterByReactAngularList);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  test,
  stackWiseFilter,
};
