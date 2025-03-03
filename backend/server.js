require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// MySQL Connection Without Database to Create Database First
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
});

// Connect and Create Database if Not Exists
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('MySQL Connected...');

        // Create the database if it doesn't exist
        db.query(`CREATE DATABASE IF NOT EXISTS db_hotel`, (err) => {
            if (err) {
                console.error('Error creating database:', err);
            } else {
                console.log('Database db_buynest created or already exists.');
            }
        });

        // Connect to the newly created database
        db.changeUser({ database: 'db_hotel' }, (err) => {
    if (err) {
        console.error('Error switching to db_hotel:', err);
    } else {
        console.log('Using database db_hotel.');

        // Create rooms table if it doesn't exist
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS rooms (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            price DECIMAL(10,2) NOT NULL
        )`;

        db.query(createTableQuery, (err) => {
            if (err) {
                console.error('Error creating table:', err);
            } else {
                console.log('Rooms table created or already exists.');
            }
        });
    }
});

    }
});

app.post('/available-rooms', (req, res) => {  // ✅ Corrected Endpoint
  const { check_in, check_out } = req.body;

  if (!check_in || !check_out) {
      return res.status(400).json({ message: "Check-in and check-out dates are required" });
  }

  // Query to get available rooms
  const sql = `
      SELECT r.* FROM rooms r
      WHERE r.id NOT IN (
          SELECT room_id FROM booked 
          WHERE (check_in <= ? AND check_out >= ?)
      )
  `;

  db.query(sql, [check_out, check_in], (err, results) => {
      if (err) {
          console.error("Error checking room availability:", err);
          return res.status(500).json({ message: "Error checking availability" });
      }
      res.json(results);
  });
});


// 🟢 2️⃣ Route to Book a Room
app.post('/roomlist', (req, res) => {
  const { room_id, check_in, check_out } = req.body;

  if (!room_id || !check_in || !check_out) {
      return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO booked (room_id, check_in, check_out, status) VALUES (?, ?, ?, 'booked')";
  db.query(sql, [room_id, check_in, check_out], (err, result) => {
      if (err) {
          console.error("Error booking room:", err);
          return res.status(500).json({ message: "Error booking the room" });
      }
      res.json({ message: "Room booked successfully!" });
  });
});
app.get('/accommodation', (req, res) => {
  const sql = 'SELECT id, name, image, description, price FROM rooms'; // No amenities
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).send('Error fetching rooms');
      } else {
          res.json(results);
      }
  });
});

// 🟢 1️⃣ Get All Rooms (For Admin Panel)
app.get('/admin/rooms', (req, res) => {
  const sql = "SELECT * FROM rooms";
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ message: "Error fetching rooms" });
      }
      res.json(results);
  });
});

app.post('/admin/add-room', (req, res) => {
  const { name, image, description, price } = req.body;

  if (!name || !image || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO rooms (name, image, description, price) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, image, description, price], (err, result) => {
      if (err) {
          console.error("Error adding room:", err);
          return res.status(500).json({ message: "Error adding room" });
      }
      res.json({ message: "Room added successfully!" });
  });
});

app.put('/admin/update-room/:id', (req, res) => {
  const { id } = req.params;
  const { name, image, description, price } = req.body;

  if (!name || !image || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "UPDATE rooms SET name=?, image=?, description=?, price=? WHERE id=?";
  db.query(sql, [name, image, description, price, id], (err, result) => {
      if (err) {
          console.error("Error updating room:", err);
          return res.status(500).json({ message: "Error updating room" });
      }
      res.json({ message: "Room updated successfully!" });
  });
});

app.delete('/admin/delete-room/:id', (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM rooms WHERE id=?";
  db.query(sql, [id], (err, result) => {
      if (err) {
          console.error("Error deleting room:", err);
          return res.status(500).json({ message: "Error deleting room" });
      }
      res.json({ message: "Room deleted successfully!" });
  });
});


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});