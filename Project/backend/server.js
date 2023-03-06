const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
//Ds
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
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connection to mongo db successsful");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
