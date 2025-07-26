require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');
const categoryRoutes = require('./routes/categories');

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/categories', categoryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
