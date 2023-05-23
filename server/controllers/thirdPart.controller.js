const axios = require('axios');

async function getCompanyName(req, res) {
  try {
    const query = req.params.query;
    const url = `https://api.crunchbase.com/api/v4/autocompletes?query=${query}&limit=2`;
    const headers = {
      'X-cb-user-key': 'dac921985bd65b314f51f2314be8ac01',
    };
    const response = await axios.get(url, { headers });
    const companyData = response.data;
    res.json(companyData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = getCompanyName;
