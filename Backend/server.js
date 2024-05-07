const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/userRoute");



dotenv.config();
app.use(cors());
app.use(express.json());

// Mongoose Setup     
mongoose.connect(process.env.URI, {
})
.then(() => {
  console.log("connected successfully");
  app.listen(process.env.PORT || 8000, (err) => {
    if (err) console.log(err);
    console.log("running successfully at", process.env.PORT);
  });
})
.catch(err => console.log(err));  


app.use(userRoute);
