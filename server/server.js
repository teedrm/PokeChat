const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
const userQueries = require('./db/queries/users');

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
  console.log("DATA", data);
  userQueries.createNewUser(data)
  .then(r =>{
    console.log("RES", r)
    res.json({"message": "Hi"});
  })
  });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});