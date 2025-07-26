const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const notesRoute = require('./routes/notes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  // no need for useNewUrlParser or useUnifiedTopology in modern driver
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));

app.use('/api/notes', notesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
