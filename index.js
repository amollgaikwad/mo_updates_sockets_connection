const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const status = require("./Updates");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const getRandomObjects = (array, num) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

io.on("connection", (socket) => {
  console.log("Client connected");

  const sendRandomObjects = () => {
    const randomObjects = getRandomObjects(status, 8);
    socket.emit("update", randomObjects);
  };

  sendRandomObjects();

  // Send objects every 5 seconds
  const interval = setInterval(sendRandomObjects, 1000 * 5);

  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });

  // Error handling
  socket.on("error", (error) => {
    console.error("Socket.IO error:", error);
  });

  // Keep-alive mechanism
  const pingInterval = setInterval(() => {
    if (socket.connected) {
      socket.emit("ping");
    }
  }, 1000 * 30); // Ping every 30 seconds

  socket.on("pong", () => {
    console.log("Pong received");
  });

  socket.on("disconnect", () => {
    clearInterval(pingInterval);
  });
});

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
