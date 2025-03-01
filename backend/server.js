const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: '@',  // Replace with your MySQL username
  password: 'YES',  // Replace with your MySQL password
  database: 'db_hotel'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API Endpoint to Fetch Rooms
app.get('/roomlist', (req, res) => {
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch rooms' });
    } else {
      res.json(results);
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
