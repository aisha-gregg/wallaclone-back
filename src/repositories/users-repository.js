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

  const token = jwt.sign({ _id: foundUser._id }, process.env.JWT_KEY);
  return { token, id: foundUser._id };
}

async function updateOne(id, newUser) {
  const response = await user.findOneAndUpdate({ _id: id }, newUser).exec();
  return response.toJSON()._id;
}

/**
 * @param {string} id
 */
async function findOne(id) {
  return user.findById(id).exec();
}

module.exports = {
  login,
  findOne,
  updateOne
};
