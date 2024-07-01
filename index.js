const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const status = require("./Updates");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const getRandomObjects = (array, num) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

wss.on("connection", (ws) => {
  console.log("Client connected");

  const sendRandomObjects = () => {
    const randomObjects = getRandomObjects(status, 8);
    ws.send(JSON.stringify(randomObjects));
  };

  sendRandomObjects();

  // Send objects every 5 seconds
  const interval = setInterval(sendRandomObjects, 1000 * 5);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });

  // Error handling
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // Keep-alive mechanism
  const pingInterval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.ping();
    }
  }, 1000 * 30); // Ping every 30 seconds

  ws.on("pong", () => {
    console.log("Pong received");
  });

  ws.on("close", () => {
    clearInterval(pingInterval);
  });
});

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});


server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
