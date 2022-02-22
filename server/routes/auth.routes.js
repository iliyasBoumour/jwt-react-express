const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");
const validateUser = require("../guards/auth-local.guard");

router.route("/login").post(validateUser, login);

module.exports = router;
