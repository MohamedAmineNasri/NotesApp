const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const { authenticateToken } = require("./utilities");
const User = require("./models/user.model");

mongoose.connect(process.env.CONNECTIONSTRING);

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({
    data: "Hello, World",
  });
});

//Create Account
app.use("/create-account", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "fullName is required" });
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: true, message: "fullName is required" });
  }

  if (!password) {
    return res.status(400).json({ error: true, message: "password is required" });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.json({
      error: true,
      message: "User already exist",
    });
  }

  const user = new User({
    fullName,
    email,
    password,
  });

  await user.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration was successful",
  });
});

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});

module.exports = app;
