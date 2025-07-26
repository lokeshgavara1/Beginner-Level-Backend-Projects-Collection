const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// Create a new author
router.post('/', async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single author by ID
router.get('/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an author
router.put('/:id', async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAuthor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an author
router.delete('/:id', async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
