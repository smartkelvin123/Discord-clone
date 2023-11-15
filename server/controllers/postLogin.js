const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create new token
      const token = jwt.sign(
        {
          userId: user._id,
          email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
      );

      return res.status(200).json({
        userDetails: {
          username: user.username,
          email: user.email,
          token,
        },
      });
    }
    return res.status(400).send("Invalid credentials, please try again");
  } catch (error) {
    return res.status(500).send("Something went wrong, please try again");
  }
};

module.exports = postLogin;
