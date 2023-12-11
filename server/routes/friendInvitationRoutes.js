const express = require("express");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");
const joi = require("joi");

const postfriendInvitationSchema = joi.object({
  targetMailaddress: joi.string().email(),
});

const inviteDecisionSchema = joi.object({
  id: joi.string().required(),
});

router.post(
  "/invite",
  auth,
  validator.body(postfriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

router.post(
  "/accept",
  auth,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postAccept
);

router.post(
  "/reject",
  auth,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postReject
);

module.exports = router;
