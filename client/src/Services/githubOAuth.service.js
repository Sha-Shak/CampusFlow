import axios from 'axios';
const baseUrl = 'https://campusflow.fly.dev';

export async function getAccessToken(code) {
  try {
    const url = `${baseUrl}/github/access`;
    console.log('url', url);
    const res = await axios.post(url, { code });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const token = localStorage.getItem('github-access-token');
    const url = `https://api.github.com/user`;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.hellcat-preview+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Invalid token.');
  }
}
