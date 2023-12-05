const jwt = require("jsonwebtoken");

const config = process.env;
const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    console.error("Socket authentication error:", err.message);
    const socketError = new Error(
      "Socket authentication failed. Invalid or expired token."
    );
    return next(socketError);
  }
};

module.exports = verifyTokenSocket;
