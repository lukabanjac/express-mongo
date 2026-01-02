const express = require('express');
const users = require('./routes/users');
const events = require('./routes/events');
const venues = require('./routes/venues');
const app = express();

app.use(express.json());
app.use('/api/users', users);
app.use('/api/events', events);
app.use('/api/venues', venues);

// Demo route that throws
app.get('/error', (req, res) => {
  throw new Error('Something broke!');
});

// Async route must pass errors to next()
app.get('/async-error', async (req, res, next) => {
  try {
    await Promise.reject(new Error('Async crash!'));
  } catch (err) {
    next(err); // forwards to error handler
  }
});

// 404 for unmatched routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: true,
    message: err.message,
  });
});

module.exports = app;
