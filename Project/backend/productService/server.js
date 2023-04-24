// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const itemRouter = require("./routes/item"); // Import router for item-related endpoints

// Create an Express app
const app = express();

// Middleware to parse JSON data and urlencoded data
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// Enable CORS
app.use(cors());

const PORT = process.env.PORT; // Get port number from environment variables
const URI = process.env.URI; // Get MongoDB URI from environment variables

// Connect to MongoDB database and start server
mongoose
  .connect(URI, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/product", itemRouter); // Mount itemRouter at /api/product endpoint
