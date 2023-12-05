const jwt = require("jsonwebtoken");
const config = process.env;

const generateAccessToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRATION,
  });
};

const refreshToken = (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);

    // Assuming you have a user object in the decoded token
    const user = decoded.user;

    // Generate a new access token
    const accessToken = generateAccessToken(user);

    // Send the new access token to the client
    res.json({ accessToken });
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    return res.status(401).json({ error: "Invalid refresh token" });
  }
};

module.exports = refreshToken;
