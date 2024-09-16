const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const { authenticateToken } = require("./utilities");
const User = require("./models/user.model");
const Note = require("./models/note.model");

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
    return res
      .status(400)
      .json({ error: true, message: "password is required" });
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

//Login
app.use("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  if (userInfo.email === email && userInfo.password === password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "36000m",
    });

    return res.json({
      error: false,
      message: "Login was successful",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "invalid Credentials",
    });
  }
});

//Add Note
app.post("/add-note", authenticateToken, async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user
  if (!title) {
    return res.status(400).json({
      message: "Ttitle is required",
    });
  }
  if (!content) {
    return res.status(400).json({
      message: "Content is required",
    });
  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: user._id
    })

    await note.save()

    return res.json({
      error: false,
      note,
      message: "Note added successfully"
    })
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Internal Server Error'
    })
  }

});

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});

module.exports = app;
