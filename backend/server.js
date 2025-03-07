require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
});

// Connect and Create Database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL Connected...");

  // Create the database
  db.query(`CREATE DATABASE IF NOT EXISTS db_hotel`, (err) => {
    if (err) {
      console.error("Error creating database:", err);
    } else {
      console.log("Database db_hotel created or already exists.");
    }

    // Switch to the created database
    db.changeUser({ database: "db_hotel" }, (err) => {
      if (err) {
        console.error("Error switching to db_hotel:", err);
        return;
      }
      console.log("Using database db_hotel.");

      // Create rooms table
      const createRoomsTableQuery = `
        CREATE TABLE IF NOT EXISTS rooms (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(100) NOT NULL,
          image VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          price DECIMAL(10,2) NOT NULL
        )`;

      db.query(createRoomsTableQuery, (err) => {
        if (err) {
          console.error("Error creating rooms table:", err);
        } else {
          console.log("Rooms table created or already exists.");
        }
      });

      // Create booked table
      const createBookedTableQuery = `
        CREATE TABLE IF NOT EXISTS booked (
          id INT PRIMARY KEY AUTO_INCREMENT,
          room_id INT NOT NULL,
          check_in DATE NOT NULL,
          check_out DATE NOT NULL,
          status VARCHAR(50) DEFAULT 'booked',
          FOREIGN KEY (room_id) REFERENCES rooms(id)
        )`;

      db.query(createBookedTableQuery, (err) => {
        if (err) {
          console.error("Error creating booked table:", err);
        } else {
          console.log("Booked table created or already exists.");
        }
      });
    });
  });
});

// Route to Add a Room
app.post("/admin/add-room", (req, res) => {
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

// Route to Get All Rooms for Admin Panel
app.get("/admin/rooms", (req, res) => {
  const sql = "SELECT * FROM rooms";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching rooms" });
    }
    res.json(results);
  });
});

//Route to Update a Room
app.put("/admin/update-room/:id", (req, res) => {
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

//Route to Delete a Room
app.delete("/admin/delete-room/:id", (req, res) => {
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

// Route to Get Available Rooms Based on Check-in and Check-out Dates
app.post("/available-rooms", (req, res) => {
  const { check_in, check_out } = req.body;

  if (!check_in || !check_out) {
    return res.status(400).json({ message: "Check-in and check-out dates are required" });
  }

  const sql = `
    SELECT r.* FROM rooms r
    WHERE r.id NOT IN (
      SELECT room_id FROM booked 
      WHERE check_in <= ? AND check_out >= ?
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

//Route to Book a Room
app.post("/roomlist", (req, res) => {
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

// Route to Fetch All Rooms for Accommodation Page
app.get("/accommodation", (req, res) => {
  const sql = "SELECT id, name, image, description, price FROM rooms";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching rooms");
    } else {
      res.json(results);
    }
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
