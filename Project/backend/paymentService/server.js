const express = require("express"); // Express.js framework
const mongoose = require("mongoose"); // MongoDB object modeling tool
const cors = require("cors"); // Cross-Origin Resource Sharing middleware
require("dotenv").config(); // Loads environment variables from a .env file

// Importing route modules
const paymentRouter = require("./routes/payment");

// Creating an Express.js app
const app = express();

// Using middleware to parse incoming requests
app.use(express.json({ limit: "100mb" })); // Parses incoming JSON data
app.use(express.urlencoded({ limit: "100mb", extended: true })); // Parses incoming URL-encoded data
app.use(cors()); // Enables Cross-Origin Resource Sharing for all routes

// Defining the server port and the MongoDB database URI using environment variables
const PORT = process.env.PORT;
const URI = process.env.URI;

// Connecting to the MongoDB database and starting the server
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

// Adding a route for handling payment-related requests
app.use("/api/payment", paymentRouter);
