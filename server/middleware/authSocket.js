const jwt = require("jsonwebtoken");

const config = process.env;

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;

  try {
    const decoded = jwt.verify(token, config.token_key);
    socket.user = decoded;
  } catch (error) {
    const socketError = new Error("not authorised");
    return next(socketError);
  }
  next();
};

module.exports = verifyTokenSocket;

//     let token = socket.handshake.auth.token;
//     if (!token) {
//         return next(new Error("A token is required for authentication"));
//     }
//     try {
//         token = token.replace(/^Bearer\s+/, "");
//         const decoded = verify(token, config.JWT_SECRET);
//         socket = socket;
//     } catch (error) {
//         return next(new Error("Invalid Token"));
// }
