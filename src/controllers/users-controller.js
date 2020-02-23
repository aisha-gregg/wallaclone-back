const {
  login,
  findOne,
  updateOne
} = require("../repositories/users-repository");
const express = require("express");
const { UserNotFoundError } = require("../repositories/user-not-found-error");
const {
  PasswordNotValidError
} = require("../repositories/password-not-valid-error");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function loginUser(req, res) {
  try {
    const response = await login(req.body.email, req.body.password);
    res.send(response);
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return res.status(404).send({ error: error.message });
    } else if (error instanceof PasswordNotValidError) {
      return res.status(401).send({ error: error.message });
    } else {
      return res.status(500).send({ error: error.message });
    }
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function updateUser(req, res) {
  const id = await updateOne(req.params.id, req.body);
  return res.send({ id });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function getUser(req, res) {
  const { password, ...rest } = (await findOne(req.params.id)).toJSON();
  return res.send({ ...rest });
}

module.exports = {
  loginUser,
  getUser,
  updateUser
};
