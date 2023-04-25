const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel")

//@desc Register a user
//@route POST /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await user.findOne({ email });
  if (userAvailable) {
    res.send(400);
    throw new console.error("User already registered");
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashPassword);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }
  res.json({ message: "Register the user " });
});

//@desc Login user
//@route POST /api/user/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

//@desc user info
//@route POST /api/user/current
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
