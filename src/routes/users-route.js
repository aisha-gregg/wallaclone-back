const express = require("express");
const router = express.Router();
const { loginUser, getUser } = require("../controllers/users-controller");

router.get("/users/:id", getUser);
router.put("/users", loginUser);

module.exports = router;
