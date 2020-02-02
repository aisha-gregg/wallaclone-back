class PasswordNotValidError extends Error {
  constructor() {
    super("Password not valid error");
  }
}

module.exports = {
  PasswordNotValidError
};
