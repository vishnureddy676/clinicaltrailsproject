const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Read the participant data from the JSON file
const participantsData = JSON.parse(fs.readFileSync('participants.json'));
const trialsData = JSON.parse(fs.readFileSync('trials.json'));
const participantTrialsData = JSON.parse(fs.readFileSync('participantTrials.json'));

// Open a connection to the SQLite database
const db = new sqlite3.Database('database.sqlite');

// Execute the SQL statements to create the tables and insert sample data
db.serialize(() => {
  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS Participants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT,
      trialStatus TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Trials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      startDate DATE,
      endDate DATE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS ParticipantTrials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      participantId INTEGER,
      trialId INTEGER,
      FOREIGN KEY (participantId) REFERENCES Participants (id),
      FOREIGN KEY (trialId) REFERENCES Trials (id)
    )
  `);

  // Insert participants from the JSON file
  const insertParticipant = db.prepare(`
    INSERT INTO Participants (name, email, phone, address, trialStatus)
    VALUES (?, ?, ?, ?, ?)
  `);

  participantsData.forEach((participant) => {
    insertParticipant.run(participant.name, participant.email, participant.phone, participant.address, participant.trialStatus);
  });

  insertParticipant.finalize();

  
  const insertTrial = db.prepare(`
    INSERT INTO Trials (name, description, startDate, endDate)
    VALUES (?, ?, ?, ?)
  `);

  trialsData.forEach((trial) => {
    insertTrial.run(trial.name, trial.description, trial.startDate, trial.endDate);
  });

  insertTrial.finalize();


  const insertParticipantTrial = db.prepare(`
    INSERT INTO ParticipantTrials (participantId, trialId)
    VALUES (?, ?)
  `);

  participantTrialsData.forEach((association) => {
    insertParticipantTrial.run(association.participantId, association.trialId);
  });

  insertParticipantTrial.finalize();
});

// Close the database connection
db.close();