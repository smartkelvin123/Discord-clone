const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");

const newConnectionHandler = (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  // update pendingfriends invitation list
  friendsUpdate.updateFriendsPendingInvitation(userDetails.userId);
  //updated friends list
  // update friends list
  friendsUpdate.updateFriends(userDetails.userId);
};

module.exports = newConnectionHandler;
