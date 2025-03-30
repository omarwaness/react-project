// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express"); // Framework for handling HTTP requests
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const cookieParser = require("cookie-parser"); // Middleware to parse cookies
const mongoose = require("mongoose"); // ODM for MongoDB
const path = require("path"); // Module to handle file paths

// Initialize an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS to allow requests from the frontend
app.use(cors({ origin: "http://localhost", credentials: true }));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI) // Retrieve MongoDB URI from environment variables
  .then(() => console.log("MongoDB Connected")) // Log success message on successful connection
  .catch((err) => console.error(err)); // Log error if connection fails

// Define API routes for authentication
app.use(
  "/api/auth", 
  require("./routes/authRoutes") // Import authentication-related routes
);

// Serve static files from the React frontend build directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Fallback route to serve the frontend index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Set the port for the server (default to 5000 if not specified in environment variables)
const PORT = process.env.PORT || 5000;

// Start the Express server and listen on the specified port
app.listen(
  PORT,
  "0.0.0.0",
  () => console.log(`Server is running on port ${PORT}`)
);
