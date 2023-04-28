const express = require('express');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Using UUID and sha256 algo to generate unique hash key, return after 1 second
app.get('/random-hash', (req, res) => {
  setTimeout(() => {
    const hash = crypto.createHash('sha256').update(uuidv4()).digest('hex');
    res.json({ hash });
  }, 1000);
});

// listening to localhost::3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});