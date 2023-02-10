require("dotenv").config();

const session = require("express-session");
const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const userQueries = require("./db/queries/users");

//setting up cookie
// const cookieSession = require("cookie-session");
// const session = cookieSession({
//   name: "session",
//   keys: ["secret"],
//   sameSite: true,
// });
const sessionMiddleware = session({
  secret: "changeit",
  resave: false,
  saveUninitialized: false,
});

app.use(express.static("public"));
app.use(express.json());
app.use(session);
app.use(cors());

app.get("/home", (req, res) => {
  res.json({ users: [1, 2, 3] });
});

const rooms = new Set();
app.get("/room", (req, res) => {
  rooms.add(req.params.room)
  res.json({ rooms });
});

app.post("/rooms", (req, res) => {
  const newRoom = {
    id: rooms.length + 1,
    name: req.body.name
  };
  rooms.push(newRoom);
  res.json(newRoom);
})

// Login: save user to session
app.post("/login", (req, res) => {
  const name = req.body.email;
  //why do we need an id? if it would always be 1
  const user = { id: 1, name };
  req.session.user = user;
  res.json(user);
});

app.post("/signup", (req, res) => {
  const data = req.body;
  userQueries.createNewUser(data).then((r) => {
    ///////////////////////////////
    // res.cookie("user", generateRandomString(), {
    //   maxAge: 1000 * 60 * 60 * 24, // 1 day
    //   httpOnly: true,
    //   sameSite: 'strict',
    //   secure: true
    // } )
    req.session.token = generateRandomString();
    res.json({ message: "successfully created user" });
  });
});

//listening to socket connection

const http = app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

const io = new Server(http, {
  allowRequest: (req, callback) => {
    // with HTTP long-polling, we have access to the HTTP response here, but this is not
    // the case with WebSocket, so we provide a dummy response object
    const fakeRes = {
      getHeader() {
        return [];
      },
      setHeader(key, values) {
        req.cookieHolder = values[0];
      },
      writeHead() {},
    };
    sessionMiddleware(req, fakeRes, () => {
      if (req.session) {
        // console.log("req.session", req.session);
        var user = req.session.user;
        if (!user) {
          user = "id" + Math.random().toString(16).slice(2);
          req.session.user = user;
        }
        // trigger the setHeader() above
        fakeRes.writeHead();
        // manually save the session (normally triggered by res.end())
        req.session.save();
      }
      callback(null, true);
    });
  },
});
const clients = {};

// Allow socket.io to access session
////////////////////////////
// const wrap = (middleware) => (socket, next) =>
//   middleware(socket.request, {}, next);
// io.use(wrap(session));
io.engine.on("initial_headers", (headers, req) => {
  if (req.cookieHolder) {
    headers["set-cookie"] = req.cookieHolder;
    delete req.cookieHolder;
  }
});

io.on("connection", (client) => {
  const session = client.request.session;
  // console.log("session", JSON.stringify(client.request.session, null, 2));
  const name = session?.user;
  // ?.name;

  console.log("Client Connected!", name, " : ", client.id);

  // Add this client.id to our clients lookup object
  clients[name] = client.id;
  // console.log("clients", clients);

  const rooms = new Set();

  client.on("message", (data) => {
    console.log(data);
    const { text, to } = data;
    const from = name;

    if (!to) {
      client.broadcast.emit("public", { text, from });
      client.emit("public", { text, from });

      return;
    }

    const id = clients[to];
    console.log(`Sending message to ${to}:${id}`);
    io.to(id).emit("private", { text, from });
  });

  // socket for lobby rooms
  client.on("rooms", (data) => {
    console.log(data);
    client.request.session.reload((err) => {
      if (err) {
        // session has expired
        delete clients[name];
        return client.disconnect();
      }
      const { room } = data;
      // client.broadcast.emit("addRoom", { room });
      client.emit("addRoom", { room });
    });
  });
  //socket for lobby rooms
  // client.on("rooms", ({ room, cb }) => {
  //   client.request.session.reload((err) => {
  //     if (err) {
  //       // session has expired
  //       return client.disconnect();
  //     }
  //     console.log("room", room);
  //     rooms.add(room);
  //     cb(rooms);
  //   });
  // });

  // client.on("disconnect", () => {
  //   delete clients[name];
  //   console.log("Client Disconnected", name, " : ", client.id);
  //   client.broadcast.emit("system", `${name} has just left`);
  // });
});
