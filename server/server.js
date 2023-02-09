const express = require("express");
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
  userQueries.createNewUser(data)
  .then(r => console.log(r))
  });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});