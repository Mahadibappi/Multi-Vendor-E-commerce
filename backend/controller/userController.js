const express = require("express");
const { upload } = require("../Multer");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();
const path = require("path");
const User = require("../models/userModel");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;

  const existEmail = await User.findOne({ email });
  if (existEmail) {
    return next(new ErrorHandler("Email already exist"));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);
  const userData = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };
  const newUser = await User.create(userData);
  res.status(201).json({
    success: true,
    newUser,
  });
});

module.exports = router;
