const authSocket = require("./middleware/authSocket");
const colors = require("colors");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");

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

    socket.on("disconnect", () => {
      console.log(`Disconnected: ${"user disconnected"}`.cyan.underline.bold);
      disconnectHandler(socket);
    });
  });

  io.on("error", (err) => {
    console.error("Socket.IO error:", err);
  });
};

module.exports = {
  registerSocketServer,
};
