const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

//Creating an express app
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 8070;
const URI = process.env.URI;

//Server and Database connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);

  mongoose.set("strictQuery", false);
  mongoose.connect(URI, (err) => {
    console.log("Connection to mongo db successsful");

    if (err) console.log(err.message);
  });
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
