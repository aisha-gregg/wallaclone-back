const { login } = require("../repositories/users-repository");
const { UserNotFoundError } = require("../repositories/user-not-found-error");
const {
  PasswordNotValidError
} = require("../repositories/password-not-valid-error");

async function loginUser(req, res) {
  try {
    const token = await login(req.body.email, req.body.password);
    res.send({ token });
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

module.exports = {
  loginUser
};
