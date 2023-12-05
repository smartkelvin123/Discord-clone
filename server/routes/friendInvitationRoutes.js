const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");
const joi = require("joi");

const postfriendInvitationSchema = joi.object({
  targetMailaddress: joi.string().email(),
});

router.post(
  "/invite",
  auth,
  validator.body(postfriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

module.exports = router;
