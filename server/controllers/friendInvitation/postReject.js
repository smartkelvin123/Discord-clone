const friendInviataion = require("../../models/friendInvitation");
const friendsUpdate = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    //remove that invitaion from friend inviataion collection
    const inviataionExists = await friendInviataion.exist({ _id: id });
    if (inviataionExists) {
      await friendInviataion.findByIdAndDelete(id);
    }

    //update pending Invitation
    friendsUpdate.updateFriendsPendingInvitations(userId);

    return res.status(200).send(" invitation success rejected");
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong, please try again");
  }
};

module.exports = postReject;
