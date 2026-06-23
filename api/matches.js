export default async function handler(req, res) {
  // Your provided football-data.org API key
  const apiKey = "87cdfb4e72ac4f8c875affc0907f82ed";
  
  try {
    const response = await fetch("https://api.football-data.org/v4/competitions/WC/matches", {
      headers: { "X-Auth-Token": apiKey }
    });
    
    if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch from API" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
