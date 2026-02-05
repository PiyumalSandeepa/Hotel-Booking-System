// db.js
const mongoose = require("mongoose");
const dns = require("dns");

// Optional but recommended in your case: force DNS to use Google
// This helps avoid `querySrv ECONNREFUSED _mongodb._tcp...`
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// ✅ SRV connection string FROM ATLAS, with your DB name added
// (you can change `hotel_booking` to whatever DB name you want)
const mongoURI =
  "mongodb+srv://piyumal:12345@bluesaffare.hcgoakv.mongodb.net/hotel_booking?retryWrites=true&w=majority&appName=BlueSaffare";

const connectionOptions = {
  family: 4,                   // Prefer IPv4
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
};

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(mongoURI, connectionOptions);
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.log("❌ MongoDB connection failed");
    console.error(error);      // log full error, not just message
    process.exit(1);           // stop the app if DB connection fails
  }
}

connectDB();

// Connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("🔄 MongoDB reconnected");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

module.exports = mongoose;