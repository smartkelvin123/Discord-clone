const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const { registerSocketServer } = require("./socketServer");
const PORT = process.env.PORT || process.env.API_PORT;
const authRoutes = require("./routes/authRoutes");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// register
app.use("/api/auth", authRoutes);
app.use("/api/friend-invitation", friendInvitationRoutes);

const server = http.createServer(app);
registerSocketServer(server);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then((conn) => {
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );

    // Start the server after MongoDB connection is established
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.cyan.underline.bold);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    // Terminate the server if the MongoDB connection fails
    process.exit(1);
  });
