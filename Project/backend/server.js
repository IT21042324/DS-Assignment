const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();

const userRouter = require("./routes/user");
const reviewRouter = require("./routes/review");
const itemRouter = require("./routes/item");

//Creating an express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8070;
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

app.use("/api/user", userRouter);
app.use("/api/user/review", reviewRouter);
app.use("/api/item", itemRouter);
