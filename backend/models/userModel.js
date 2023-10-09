const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name!"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [4, "Password should be at least 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  address: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },

  avatar: {
    // public_id: {
    //   type: String,
    // },
    url: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
