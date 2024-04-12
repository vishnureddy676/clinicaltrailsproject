const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not defined in the environment variables




// Middleware
app.use(express.json());
app.use(cors());

const participantRoutes = require('./routes/participantRoutes');
const trialRoutes = require('./routes/trialRoutes');


// API routes
app.use('/api/participants', participantRoutes);
app.use('/api/trials', trialRoutes);


// Create a connection to the SQLite database
 const db = new sqlite3.Database('../database/database.sqlite');




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
