const mongoose = require("mongoose");
const user = mongoose.model("user");
const hash = require("hash.js");
const { UserNotFoundError } = require("./user-not-found-error");
const { PasswordNotValidError } = require("./password-not-valid-error");

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

  return true;
}

module.exports = {
  login
};
