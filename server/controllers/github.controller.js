require('dotenv').config();
const axios = require('axios');
const gh_client_id = process.env.GITHUB_CLIENT_ID;
const gh_client_secret = process.env.GITHUB_CLIENT_SECRET;
const gh_personal_token = process.env.GITHUB_PERSONAL_TOKEN;

const getGithubAccessToken = async (req, res) => {
  const { code } = req.body;
  console.log(code);
  const url = `https://github.com/login/oauth/access_token?client_id=${gh_client_id}&client_secret=${gh_client_secret}&code=${code}`;
  try {
    const response = await axios.post(url);
    const resultData = response.data;
    const accessToken = resultData.split('&')[0].split('=')[1];
    console.log(accessToken);
    res.status(200).send(accessToken);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getGithubUser = async (req, res) => {
  const url = `https://api.github.com/user`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer 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`,
        'github-access-token': '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',
      },
    });
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
  console.log(gh_personal_token);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${gh_personal_token}`,
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
