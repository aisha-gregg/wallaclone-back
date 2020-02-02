const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/users-controller");

router.put("/users", (req, res, next) => loginUser(req, res, next));

module.exports = router;
