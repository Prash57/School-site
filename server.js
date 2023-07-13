const express = require("express");
const app = express();
const home = require("./routes/router");
const connectDB = require("./db/connect");
require("dotenv").config();

// view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));
app.use(express.static("./public/images"));
app.use(express.static("./views"));
app.use(express.json());

// routes
app.use("/api/v1/ca", home);

// port
const port = process.env.PORT || 3000;

// server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB connection established");
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
