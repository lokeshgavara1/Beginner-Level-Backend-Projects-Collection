import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  location: String,
  temperature: String,
  weather: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Weather', weatherSchema);
