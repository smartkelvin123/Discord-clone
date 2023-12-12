const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");

const friendsUpdate = require("../../socketHandlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    const invitaion = await friendInvitation.findById(id);

    if (!invitaion) {
      return res.status(400).send("invitation not found, please try again");
    }

    const { senderId, receiverId } = invitaion;
    //add friends to both users
    const senderuser = await user.findById(senderId);
    senderuser.friends = [...senderuser.friends, receiverId];

    const receiveruser = await user.findById(receiverId);
    receiveruser.friends = [...receiveruser.friends, senderId];

    await senderuser.save();
    await receiveruser.save();
    //delete invitation
    await friendInvitation.findByIdAndDelete(id);

    //update list of the friends if the users are online

    //update list of friend pending Invitation
    friendsUpdate.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send("invitation success accepted and added");
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong, please try again");
  }
};

module.exports = postAccept;
