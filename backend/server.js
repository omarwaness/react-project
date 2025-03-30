// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Initialize an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "https://react-project-khaki-eight.vercel.app"], credentials: true }));
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Define API routes
app.get("/", (req, res) => {
  res.send("Backend is running! Try using Postman.");
});

app.use("/api/auth", require("./routes/authRoutes"));


// Set the port for the server
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, "0.0.0.0", () => console.log(`Server is running on port ${PORT}`));
