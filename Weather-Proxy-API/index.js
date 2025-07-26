import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import axios from 'axios';
import Weather from './models/Weather.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/weatherDB';

app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Route: GET /weather?lat=...&lon=...
app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and Longitude are required.' });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);

    const weatherData = {
      location: response.data.name,
      temperature: `${response.data.main.temp}°C`,
      weather: response.data.weather[0].main,
    };

    // Save to MongoDB
    const savedData = new Weather(weatherData);
    await savedData.save();

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// (Optional) Route: Get all saved weather data
app.get('/weather/history', async (req, res) => {
  try {
    const allData = await Weather.find().sort({ timestamp: -1 });
    res.json(allData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather history' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
