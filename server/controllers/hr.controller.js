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

const filterBySkillsIdAndSort = (allAlumniList, stack) => {
  const filteredAlumniListByReactAngular = [];

  allAlumniList.forEach((alumni) => {
    const alumniObj = {
      studentId: alumni.studentId.toString(),
      alumniDetails: alumni.alumniDetails,
      checkpoint: alumni.checkpoint,
      others: {},
    };

    // console.log(alumni.studentId.toString(), 'alumni');
    alumni.checkpoint.techSkills.forEach((techSkill) => {
      if (techSkill.skill.toString() === stack) {
        // console.log(techSkill.skill.toString(), techSkill.marks);

        alumniObj.others = {
          // alumni: alumni,
          // alumni: Object.assign(alumni),

          skillId: techSkill.skill.toString(),
          marks: techSkill.marks,
        };
        filteredAlumniListByReactAngular.push(alumniObj);
        // filteredAlumniListByReactAngular.push({
        //   // alumni: alumni,
        //   // alumni: Object.assign(alumni),

        //   skillId: techSkill.skill.toString(),
        //   marks: techSkill.marks,
        //   checkpoint: alumni.checkpoint,
        // });
      }
    });
  });

  // sort res by marks
  filteredAlumniListByReactAngular.sort((a, b) => {
    return b.marks - a.marks;
  });
  // console.log(filteredAlumniListByReactAngular, 'debug');
  return filteredAlumniListByReactAngular;
};

const test = async (req, res) => {
  res.status(200).send('Hello World');
};

const stackWiseFilter = async (req, res) => {
  const stackType = req.body.stack; // frontend, backend, fullstack
  const skilltypeIds = req.body.skill; // react, angular, nodejs, expressjs, mongodb, mysql, etc's id
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
    // let filteredAlumniListByStack = filterByStack(allAlumniList, stackType);

    let filteredFrontEndList;
    let filteredBackEndList;

    if (stackType === 'frontend') {
      let filteredAlumniListByStack = filterByStack(allAlumniList, stackType);

      let filteredAlumniListByFullStack = filterByStack(
        allAlumniList,
        'fullstack'
      );

      for (const skilltypeId of skilltypeIds) {
        filteredAlumniListByStack = filterBySkillsIdAndSort(
          filteredAlumniListByStack,
          skilltypeId
        );
        filteredAlumniListByFullStack = filterBySkillsIdAndSort(
          filteredAlumniListByFullStack,
          skilltypeId
        );

        filteredFrontEndList = filteredAlumniListByStack;
      }

      return res.send([
        ...filteredFrontEndList,
        ...filteredAlumniListByFullStack,
      ]);
    } else if (stackType === 'backend') {
      let filteredAlumniListByStack = filterByStack(allAlumniList, stackType);
      let filteredAlumniListByFullStack = filterByStack(
        allAlumniList,
        'fullstack'
      );

      for (const skilltypeId of skilltypeIds) {
        filteredAlumniListByStack = filterBySkillsIdAndSort(
          filteredAlumniListByStack,
          skilltypeId
        );

        filteredBackEndList = filteredAlumniListByStack;
      }
      for (const skilltypeId of skilltypeIds) {
        filteredAlumniListByFullStack = filterBySkillsIdAndSort(
          filteredAlumniListByFullStack,
          skilltypeId
        );
      }
      return res.send([
        ...filteredBackEndList,
        ...filteredAlumniListByFullStack,
      ]);
    } else if (stackType === 'fullstack') {
      let filteredAlumniListByFullStack = filterByStack(
        allAlumniList,
        'fullstack'
      );

      for (const skilltypeId of skilltypeIds) {
        filteredAlumniListByFullStack = filterBySkillsIdAndSort(
          filteredAlumniListByFullStack,
          skilltypeId
        );
      }
      return res.send(filteredAlumniListByFullStack);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  test,
  stackWiseFilter,
};
