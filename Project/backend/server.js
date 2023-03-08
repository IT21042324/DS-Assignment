const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);

  mongoose.set("strictQuery", false);
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connection to mongo db successsful");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.use("/api/user", userRouter);
app.use("/api/user/review", reviewRouter);
app.use("/api/item", itemRouter);
