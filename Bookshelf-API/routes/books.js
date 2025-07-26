const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const books = await Book.find().populate('author category');
  res.json(books);
});

router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id).populate('author category');
  res.json(book);
});

router.put('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
