const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Create a connection to the SQLite database
const db = new sqlite3.Database('../database/database.sqlite');
router.get('/', (req, res) => {

  // Retrieve all participants from the database
  db.all('SELECT * FROM Trials', (err, rows) => {
    if (err) {

      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send the participants as a response
    res.json(rows);
  });
});
module.exports = router;