//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");

//dotenv config
const dotenv = require("dotenv");
dotenv.config();


// cors
const cors = require("cors");
app.use(cors());

// import custom route
const userRoute = require("./routes/userRoute");

// data will converted into json
app.use(express.json());

// Mongoose Setup
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("running successfully at", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("error", err);
  });

app.use(userRoute);
