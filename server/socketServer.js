const authSocket = require("./middleware/authSocket");
const colors = require("colors");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

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
    console.log(`Connected: ${"user connected"}`.cyan.underline.bold);
    console.log(socket.id);

    newConnectionHandler(socket, io);
  });

  io.on("error", (err) => {
    console.error("Socket.IO error:", err);
  });
};

module.exports = {
  registerSocketServer,
};
