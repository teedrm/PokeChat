require('dotenv').config()

const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const userQueries = require('./db/queries/users');

//setting up cookie
const cookieSession = require('cookie-session');
const session = cookieSession({ name: 'session', keys: ["secret"], sameSite: true });

app.use(express.static("public"));
app.use(express.json());
app.use(session);
app.use(cors());


app.get("/home", (req, res) => {
  res.json({ "users": [1, 2, 3] });
});

// Login: save user to session
app.post("/login", (req, res) => {
  const name = req.body.email;
  //why do we need an id? if it would always be 1
  const user = { id: 1, name };
  req.session.user = user;
  res.json(user);
});

// Logout: remove user object from session
app.post("/api/logout", (req, res) => {
  console.log("logout:", req.session.user);
  req.session = null;
  res.status(204).send();
});

app.post("/signup", (req, res) => {
  const data = req.body;
  userQueries.createNewUser(data)
    .then(r => {
      // res.cookie("user", generateRandomString(), {
      //   maxAge: 1000 * 60 * 60 * 24, // 1 day
      //   httpOnly: true,
      //   sameSite: 'strict',
      //   secure: true
      // } )
      req.session.token = generateRandomString()
      res.json({ "message": "successfully created user" });
    })
});

//listening to socket connection

const http = app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

const io = new Server(http);
const clients = {};
const users = [];
// Allow socket.io to access session
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(session));

io.on('connection', client => {
  const session = client.request.session;
  const name = session?.user?.name;

  console.log("Client Connected!", name, " : ", client.id);

  // Add this client.id to our clients lookup object
  clients[client.id] = name;
  console.log(clients);

  client.on('join_room', data => {
    client.join(data);
    users.push({id: client.id, room: data, name});
    console.log(users);
    //system message to notify user joined
    io.in(data).emit('system', {message: `${name} has just joined`});
    io.emit('system',{users});
    
    // const online_users = users.filter(user => user.room === data);
    // console.log('online_users',online_users);
    // client.broadcast.to(data).emit('online', online_users);
    // client.to(data).emit('online', online_users);
  })

  

  client.on('message', data => {
    console.log(data);
    const { text, to } = data;
    const from = name;

    if (!to) {
      const user = users.find((user) => user.id === client.id);
      io.in(user.room).emit('public', { text, from });

      return;
    }

    const id = clients[to]; //const id = to
    console.log(`Sending message to ${to}:${id}`);
    io.to(id).emit("private", { text, from });
  });

  client.on("disconnect", () => {
    console.log("Client Disconnected", name, " : ", client.id);

    delete clients[client.id];
    const index = users.findIndex(user => user.id === client.id);
    if (index > -1) { // only splice array when item is found
      const user = users[index];
      users.splice(index, 1); // 2nd parameter means remove one item only
      io.in(user.room).emit('system', {message: `${name} has just left`});
      io.emit('system',{users});
    }
  });

})
