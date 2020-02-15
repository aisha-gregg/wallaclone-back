const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/users-controller");

router.put("/users", loginUser);

module.exports = router;
