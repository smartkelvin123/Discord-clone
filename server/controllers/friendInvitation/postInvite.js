const postInvite = async (req, res) => {
  const { targetMailaddress } = req.body;

  return res.send("controller is working ");
};

module.exports = postInvite;
