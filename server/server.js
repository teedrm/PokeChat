const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io")

const userQueries = require('./db/queries/users');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
})

app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  res.json({ "users": [1,2,3] });
});

app.get("/login", (req, res) => {
    res.render()
  });

app.post("/signup", (req, res) => {
  const data = req.body;
  userQueries.createNewUser(data)
  .then(r =>{
    res.json({"message": "successfully created user"});
  })
  });

  //listening to socket connection
  io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    })
  })

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});