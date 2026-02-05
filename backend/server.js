const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Connection
require("./db");

// 🔥 Import Room Model
const Room = require("./models/Room");

// =====================
// ROUTES
// =====================

// Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("Hotel Booking Backend is running 🚀");
});

// Get all rooms
app.get("/roomlist", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
});

// =====================
// START SERVER
// =====================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
