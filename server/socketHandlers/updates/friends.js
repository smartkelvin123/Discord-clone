const User = require("../../models/user");
const FriendInvitaion = require("../../models/friendInvitation");

const serverStore = require("../../serverStore");

const updateFriendsPendingInvitation = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitaion.find({
      receiverId: userId,
    }).populate("senderd", "_id username email");

    // find all active  userId that has active connection
    const receiverList = serverStore.getActiveConnections(userId);

    const io = serverStore.getSocketServerInstance();
    receiverList.forEach((receiverSockeId) => {
      io.to(receiverSockeId).emit("friend-invitation", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const updateFriends = async (userId) => {
  try {
    const friends = await User.findById(userId, {
      _id: 1,
      friends: 1,
    }).populate("friends", "_id username email");
  } catch (error) {}
};

module.exports = {
  updateFriendsPendingInvitation,
};
