const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(cors());

app.use(express.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan.underline.bold);
});
