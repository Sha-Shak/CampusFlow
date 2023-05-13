const {
  getCurrentUser,
  getOrgInstructors,
  getOrgMaintainer,
  getOrgMembers,
} = require('../controllers/github.controller');

async function authMiddleware(req, res, next) {
  try {
    const githubAccessToken = req.headers['github-access-token'];
    const currentUser = await getCurrentUser(githubAccessToken);
    const currentUserName = currentUser.login;
    const instructorsList = await getOrgInstructors(githubAccessToken);
    const members = await getOrgMembers(githubAccessToken);

    let isInstructor = false;
    let isMember = false;
    instructorsList.forEach((instructor) => {
      if (instructor.login === currentUserName) {
        isInstructor = true;
      }
    });
    members.forEach((member) => {
      if (member.login === currentUserName) {
        isMember = true;
      }
    });

    if (!isInstructor) {
      if (isMember) {
        console.log(isMember, 'student');
        console.log(isInstructor, 'instructor');
        req.body.role = 'student';
        next();
      } else {
        res.status(401).send('Unauthorized Member');
      }
      //   res.status(401).send('You are not an instructor');
    } else {
      //   console.log(members);
      req.body.role = 'instructor';
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = authMiddleware;
