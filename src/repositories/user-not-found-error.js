class UserNotFoundError extends Error {
  constructor() {
    super("User not found error");
  }
}

module.exports = {
  UserNotFoundError
};
