const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, index: true },
  password: { type: String, index: true }
});

mongoose.model("user", userSchema);
