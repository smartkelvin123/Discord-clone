const user = require("../../models/user");

const postInvite = async (req, res) => {
  const { targetMailaddress } = req.body;

  const { userId, email } = req.user; // Corrected object destructuring

  // Check if friend that we would invite is not the user
  if (email.toLowerCase() === targetMailaddress.toLowerCase()) {
    return res.status(409).send("Sorry, you can't send an invite to yourself");
  }

  const targetUser = await user.findOne({
    email: targetMailaddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(400)
      .send(
        `Friend with email ${targetMailaddress} not found. Please check the email address.`
      );
  }

  // Check if invitation has been sent

  return res.send("Controller is working");
};

module.exports = postInvite;
