const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Create a connection to the SQLite database
const db = new sqlite3.Database('../database/database.sqlite');
// GET all participants
router.get('/', (req, res) => {
  // Retrieve all participants from the database
  db.all('SELECT * FROM Participants', (err, rows) => {
    if (err) {
      console.error(err);
      console.log("vishnu")
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send the participants as a response
    res.json(rows);
  });
});

// GET a single participant by ID
router.get('/:id', (req, res) => {
  const participantId = req.params.id;

  // Retrieve a single participant from the database based on the ID
  db.get('SELECT * FROM Participants WHERE id = ?', [participantId], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!row) {
      return res.status(404).json({ error: 'Participant not found' });
    }

    // Send the participant as a response
    res.json(row);
  });
});
// POST a new participant


router.post('/', (req, res) => {
  const { name, email, phone, address, trialStatus } = req.body;

  // Insert the new participant into the Participants table
  db.run(`INSERT INTO Participants (name, email, phone, address, trialStatus) VALUES (?, ?, ?, ?, ?)`,
    [name, email, phone, address, trialStatus],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Participant successfully created, return the created participant data
      const participantId = this.lastID;
      db.get(`SELECT * FROM Participants WHERE id = ?`, [participantId], (err, row) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json(row); // Return the created participant
      });
    }
  );
});




router.put('/:id', (req, res) => {
  const participantId = req.params.id;
  const { name, email, phone, address, trialStatus } = req.body;

  // Update the participant in the database
  const sql = `
      UPDATE Participants
      SET name = ?, email = ?, phone = ?, address = ?, trialStatus = ?
      WHERE id = ?
  `;


  db.run(sql, [name, email, phone, address, trialStatus, participantId], function (err) {
    if (err) {
      console.error('Error updating participant:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Fetch the updated participant from the database
    db.get('SELECT * FROM Participants WHERE id = ?', [participantId], (err, row) => {
      if (err) {
        console.error('Error fetching updated participant:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // If participant is not found, return 404
      if (!row) {
        return res.status(404).json({ error: 'Participant not found' });
      }


      // Return the updated participant as response
      res.status(200).json(row);
    });
  });
});

// DELETE a participant
router.delete('/:id', (req, res) => {
  const participantId = req.params.id;

  // Delete the participant from the database
  db.run('DELETE FROM Participants WHERE id = ?', [participantId], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log(`Participant with ID ${participantId} deleted successfully`);
    res.sendStatus(200); // Send success status
  });
});

module.exports = router;