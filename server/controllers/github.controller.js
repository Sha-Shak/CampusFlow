const axios = require('axios');
const getGithubAccessToken = async (req, res) => {
  const { code } = req.query;
  const url = `https://github.com/login/oauth/access_token?client_id=349cd35007a641dd3b2d&client_secret=4df125099069d57299eaf3f11db4590c862a686d&code=${code}`;
  try {
    const response = await axios.post(url);
    const resultData = response.data;
    const accessToken = resultData.split('&')[0].split('=')[1];
    console.log(accessToken);
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getGithubUser = async (req, res) => {
  const url = `https://api.github.com/user`;
  try {
    const response = await axios.get(url);
    const user = response.data;
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllOrganizationMembers = async (req, res) => {
  const orgName = 'student-tool';
  const url = `https://api.github.com/orgs/${orgName}/teams/staff-instructors/members`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer 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`,
        'github-access-token': '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',
      },
    });
    const members = response.data;
    res.status(200).json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllCohorts = async (req, res) => {
  const orgName = 'student-tool';
  const url = `https://api.github.com/orgs/${orgName}/teams/students/teams`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer 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`,
        'github-access-token': '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',
      },
    });
    const cohorts = response.data;
    res.status(200).json(cohorts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getStudentsInCohort = async (req, res) => {
  const cohortName = 'student-nov-2023';
  // const cohortID = 7855410;
  const url = `https://api.github.com/orgs/student-tool/teams/${cohortName}/members`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer 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`,
        'github-access-token': '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',
      },
    });
    const members = response.data;
    res.status(200).json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const addStudentToCohort = async (req, res) => {
  // Eta PUT request
  const username = 'zahidtwt';
  const cohortName = 'student-nov-2023';
  // const url = `https://api.github.com/orgs/student-tool/teams/${cohortName}/memberships/${req.body.username}`;
  const url = `https://api.github.com/orgs/student-tool/teams/${cohortName}/memberships/${username}`;
  try {
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer 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`,
          'github-access-token': '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',
        },
      }
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteStudentFromCohort = async (req, res) => {
  const cohortName = 'student-nov-2023';
  const username = 'zahidtwt';
  const url = `https://api.github.com/orgs/student-tool/teams/${cohortName}/memberships/${username}`;
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer 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`,
        'github-access-token': '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',
      },
    });
    res.status(200).json({ message: 'Member removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//post request
const addCohort = async (req, res) => {
  const cohortName = 'studen-zahid-2023';
  const url = `https://api.github.com/orgs/student-tool/teams`;
  try {
    const response = await axios.post(
      url,
      {
        name: cohortName,
        description: 'March 2023 cohort',
        privacy: 'closed',
        parent_team_id: 7855405,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
          'github-access-token': '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',
        },
      }
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getGithubAccessToken,
  getGithubUser,
  getAllOrganizationMembers,
  getAllCohorts,
  getStudentsInCohort,
  addStudentToCohort,
  deleteStudentFromCohort,
  addCohort,
};
