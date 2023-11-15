const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user exit
    const user = await User.exists({ email: email.toLowerCase() });
    if (user) {
      return res.status(400).send("user already exists");
    }
    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
    // create jwt token
    const token = jwt.sign(
      {
        userId: newUser._id,
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    // send response to client
    res.status(201).json({
      userDetails: {
        username: newUser.username,
        email: newUser.email,
        token: token,
      },
    });
  } catch (error) {
    return res.status(500).send("error occured, please try again smartly");
  }
};

module.exports = postRegister;
