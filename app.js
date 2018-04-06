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

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://api.darksky.net/forecast/d2f17b3f91b2787739f38f1f0dc018bb/37.8267,-122.4233"
    );
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
