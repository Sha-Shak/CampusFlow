import axios from 'axios';
const baseUrl = 'https://campusflow.fly.dev';

export async function getCompanyName(query) {
  try {
    const url = `${baseUrl}/api/crunchbase/${query}}`;

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it outside
  }
}
