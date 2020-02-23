const express = require("express");
const router = express.Router();
const {
  loginUser,
  getUser,
  updateUser
} = require("../controllers/users-controller");

router.get("/users/:id", getUser);
router.put("/users", loginUser);
router.put("/users/:id", updateUser);

module.exports = router;
