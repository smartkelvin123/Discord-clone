const user = require("../../models/user");
const FriendInvitaion = require("../../models/friendInvitation");
const friendsUpdate = require("../../socketHandlers/updates/friends");

const postInvite = async (req, res) => {
  const { targetMailaddress } = req.body;

  const { userId, email } = req.user; // Corrected object destructuring

  // Check if friend that we got invite is not the user
  if (email.toLowerCase() === targetMailaddress.toLowerCase()) {
    return res.status(409).send("Sorry, you can't send an invite to yourself");
  }

  const targetUser = await user.findOne({
    email: targetMailaddress.toLowerCase(),
  });
  //  if friend exit
  if (!targetUser) {
    return res
      .status(400)
      .send(
        `Friend with email ${targetMailaddress} not found. Please check the email address.`
      );
  }

  // Check if invitation has been sent
  const invationAlreadyReceived = await FriendInvitaion.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invationAlreadyReceived) {
    return res.status(409).send("You have already invited this person");
  }
  // check if the user which we would like to invite is already our friend
  const userAlreadyFriend = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );
  if (userAlreadyFriend) {
    return res
      .status(409)
      .send("friend already added. please check friends list");
  }

  // create new invitation in the database
  // const Invitation = await Invitation.create({
  //   senderId: userId,
  //   receiverId: targetUser._id,
  // });

  const newInvitation = await FriendInvitaion.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  // if invitation has been successfully sent, update if user is online

  //send pending invatation update tpo the specific user

  friendsUpdate.updateFriendsPendingInvitation(targetUser._id.toString());

  return res.status(201).send("invitation has been sent");
};

module.exports = postInvite;
