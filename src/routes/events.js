const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/', async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
});

module.exports = router;
