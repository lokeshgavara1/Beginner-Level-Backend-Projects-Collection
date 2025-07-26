const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const { nanoid } = require('nanoid');
const { BASE_URL } = process.env;

// POST /shorten
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ error: "URL is required" });

  const shortId = nanoid(6);

  const newUrl = await Url.create({ shortId, originalUrl });

  res.json({ shortUrl: `${BASE_URL}/${shortId}` });
});

// GET /:shortId
router.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;

  const entry = await Url.findOne({ shortId });
  if (!entry) return res.status(404).json({ error: 'URL not found' });

  res.redirect(entry.originalUrl);
});

module.exports = router;
