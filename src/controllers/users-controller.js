const { login } = require("../repositories/users-repository");
const { UserNotFoundError } = require("../repositories/user-not-found-error");
const {
  PasswordNotValidError
} = require("../repositories/password-not-valid-error");

async function loginUser(req, res, next) {
  try {
    const isLoggedIn = await login(req.body.email, req.body.password);
    res.send(isLoggedIn);
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return res.status(404).send({ error: error.message });
    } else if (error instanceof PasswordNotValidError) {
      return res.status(401).send({ error: error.message });
    } else {
      return res.status(500).send();
    }
  }
}

module.exports = {
  loginUser
};
