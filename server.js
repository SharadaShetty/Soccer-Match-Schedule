const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/matches', async (req, res) => {

  let { date } = req.query;
  if (!date) return res.status(400).json({ error: 'Date is required' });

  console.log(`Received request for date: ${date}`);

  if (/^\d{8}$/.test(date)) {
    date = `${date.slice(4)}${date.slice(2, 4)}${date.slice(0, 2)}`;
  }

  try {
    const response = await axios.get('https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date', {
      params: { date },
      headers: {
        'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
        'x-rapidapi-key': 'c50ddd3d49msh0f07263c63f9189p188c3ejsn0128436e70a8' 
      }
    });

    console.log('Raw API response:', response.data);

    if (response.data.status !== 'success' || !response.data.response || !Array.isArray(response.data.response.matches)) {
      console.log('No valid matches data received from API');
      return res.json({ message: 'No matches found for this date' });
    }

    const matches = response.data.response.matches;

    const formattedMatches = matches.map(match => {
    const utcTime = match.status?.utcTime;

      let formattedTime = 'Unknown';
      if (utcTime) {
        const dateObj = new Date(utcTime);
        formattedTime = dateObj.toLocaleString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZoneName: 'short'
        });
      }

      return {
        team1: match.home?.name || 'TBD',
        team2: match.away?.name || 'TBD',
        matchTime: formattedTime,
      };
    });

    console.log('Formatted Matches:', formattedMatches);
    res.json(formattedMatches);
  } catch (error) {
    console.error('API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch matches from API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
