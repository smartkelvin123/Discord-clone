const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(12).required(),
});

const registerSchema = joi.object({
  username: joi.string().min(3).max(12).required(),
  password: joi.string().min(6).max(12).required(),
  email: joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = router;
