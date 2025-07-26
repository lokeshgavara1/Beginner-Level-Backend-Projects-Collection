const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  publishedYear: Number
});

module.exports = mongoose.model('Book', bookSchema);
