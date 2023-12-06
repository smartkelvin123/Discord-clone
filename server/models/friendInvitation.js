const mongoose = require("mongoose");

const friendInvitationSchema = new mongoose.Schema({
  senderId: {
    type: schema.type.objectId,
    ref: "User",
  },
  receiverId: {
    type: schema.type.objectId,
    ref: "User",
  },
  // status : {
  //     type: schema.type.string
  // }
});

module.exports = mongoose.model("FriendInvitation", friendInvitationSchema);
