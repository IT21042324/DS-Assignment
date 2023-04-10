const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const storeRouter = require("./routes/store");
const orderRouter = require("./routes/order");

//Creating an express app
const app = express();
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.URI;

//Server and Database connection
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

app.use("/api/store", storeRouter);
app.use("/api/order", orderRouter);
