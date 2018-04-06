const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 8000;
const index = require("./routes/index");

// initialize instance of express
const app = express();

// use routes
app.use(index);

const server = http.createServer(app);

// initialize a new instance of socketIo
const io = socketIo(server);

const getApiAndEmit = "TODO"

server.listen(port, () => console.log(`Listening on port ${port}`));
