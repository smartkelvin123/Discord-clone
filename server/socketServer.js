const authSocket = require("./middleware/authSocket");
const colors = require("colors");

const registerSocketServer = (Server) => {
  const io = require("socket.io")(Server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log(` Connected: ${"user connected"}`.cyan.underline.bold);
    console.log(socket.id);
  });
};

module.exports = {
  registerSocketServer,
};
