const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello World!"); // browser
});

server.get("/about", (req, res) => {
  res.send("About..."); // browser
});

server.listen(3000, () => {
  console.log("Server is now running..."); // node
});
