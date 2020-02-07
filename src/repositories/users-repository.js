const mongoose = require("mongoose");
const user = mongoose.model("user");
const hash = require("hash.js");
const { UserNotFoundError } = require("./user-not-found-error");
const { PasswordNotValidError } = require("./password-not-valid-error");
const jwt = require("jsonwebtoken");

async function login(email, password) {
  const hashPassword = hash
    .sha256()
    .update(password)
    .digest("hex");
  const foundUser = await user.findOne({ email: email }).exec();

  if (foundUser === null) {
    throw new UserNotFoundError();
  }

  if (hashPassword !== foundUser.password) {
    throw new PasswordNotValidError();
  }

  const token = jwt.sign({ _id: foundUser._id }, "djghhhhuuwiwuewieuwieuriwu");
  return token;
}

module.exports = {
  login
};
