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

  // Send objects every 5 minutes (300,000 milliseconds)
  const interval = setInterval(sendRandomObjects, 1000 * 10);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
